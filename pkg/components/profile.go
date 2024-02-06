package components

import (
	"fmt"
	"path"
	"strings"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Profile struct {
	pulumi.ResourceState
	FileName    string `pulumi:"fileName"`
	systemPaths map[string]bool
	systemEnv   map[string]pulumi.StringInput
	content     *content `pulumi:"content"`
	project     *Project
}

type content struct {
	lines *pulumi.StringArray `pulumi:"lines"`
}

type profile struct {
}

type ProfileArgs struct {
	FileName string `pulumi:"fileName"`
	Project  *Project
}

type GetFileNameArgs struct{}

func NewProfile(ctx *pulumi.Context, name string, args ProfileArgs, opts pulumi.ResourceOption) (*Profile, error) {
	profile := &Profile{
		FileName: args.FileName,
		content: &content{
			lines: &pulumi.StringArray{},
		},
		project:     args.Project,
		systemPaths: map[string]bool{},
		systemEnv:   map[string]pulumi.StringInput{},
	}
	if err := ctx.RegisterComponentResource("pde:index:Profile", name, profile, opts); err != nil {
		return nil, err
	}
	profile.FileName = args.FileName
	file, err := local.NewFile(ctx, name, &local.FileArgs{
		Path:    pulumi.String(path.Join(args.Project.Dir, name, args.FileName)),
		Force:   pulumi.BoolPtr(false),
		Content: profile.content.lines,
	})
	if err != nil {
		return nil, err
	}
	args.Project.Home.AddLocation(ctx, name, LinkProps{
		Source: file.Path,
		Target: fmt.Sprintf(".%s", args.FileName),
	})

	if err := ctx.RegisterResourceOutputs(profile, pulumi.Map{
		"fileName": pulumi.String(args.FileName),
	}); err != nil {
		return nil, err
	}
	return profile, nil
}

func (p *Profile) GetFileName() string {
	return p.FileName
}

func (p *Profile) AddToEnv(key string, value pulumi.StringInput) {
	if _, ok := p.systemEnv[key]; !ok {
		p.systemEnv[key] = value
		s := value.ToStringOutput().ApplyT(func(v string) string {
			if strings.HasPrefix(v, p.project.Home.HomeLocation) {
				return strings.Replace(v, p.project.Home.HomeLocation, p.project.Home.HomeVar, 1)
			}
			return v
		})
		p.AddLines(pulumi.Sprintf(`export %s=%s`, key, s))
	}
}

func (p *Profile) AddToSystemPath(location string) {
	if _, ok := p.systemPaths[location]; !ok {
		s := location
		if strings.HasPrefix(location, p.project.Home.HomeLocation) {
			s = strings.Replace(location, p.project.Home.HomeLocation, p.project.Home.HomeVar, 1)
		}
		p.systemPaths[location] = true
		p.AddLines(pulumi.Sprintf(`export PATH=%s:$PATH`, s))
	}
}

func (p *Profile) AddLines(lines ...pulumi.StringInput) {
	for _, line := range lines {
		*p.content.lines = append(*p.content.lines, line)
	}
}
