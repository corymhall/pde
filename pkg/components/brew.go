package components

import (
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Brew struct {
	pulumi.ResourceState
	content *content
}

func NewBrew(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*Brew, error) {
	b := &Brew{
		content: &content{
			lines: &pulumi.StringArray{},
		},
	}
	if err := ctx.RegisterComponentResource("pde:index:Brew", name, b, opts); err != nil {
		return nil, err
	}
	_, err := local.NewFile(ctx, "brewfile", &local.FileArgs{
		Path:    pulumi.String(path.Join(project.Dir, "brew", "Brewfile")),
		Content: b.content.lines,
	})
	if err != nil {
		return nil, err
	}

	return b, nil
}

type BrewPkg struct {
	Pkg string
	Tap *string
}

func (b *Brew) Install(pkg string, tap *string) {
	if tap != nil {
		*b.content.lines = append(*b.content.lines, pulumi.Sprintf("tap %s", *tap))
	}
	*b.content.lines = append(*b.content.lines, pulumi.Sprintf("brew %s", pkg))
}
