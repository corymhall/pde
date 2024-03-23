package components

import (
	"crypto/sha256"
	"fmt"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Brew struct {
	pulumi.ResourceState
	content     *content
	ContentHash pulumi.StringOutput `pulumi:"ContentHash"`
}

type BrewArgs struct {
	Deps       []BrewDep
	Components []Component
}

type BrewDep struct {
	pkg  string
	tap  string
	cask string
}

func BrewTapCask(tap string, cask string) BrewDep {
	return BrewDep{
		cask: cask,
		tap:  tap,
	}
}

func BrewPackage(pkg string) BrewDep {
	return BrewDep{
		pkg: pkg,
	}
}

func BrewFromTap(tap string, pkg string) BrewDep {
	return BrewDep{
		pkg: pkg,
		tap: tap,
	}
}

func (b *BrewDep) Render() []string {
	lines := []string{}
	if b.tap != "" {
		lines = append(lines, fmt.Sprintf(`tap "%s"`, b.tap))
	}
	if b.pkg != "" {
		lines = append(lines, fmt.Sprintf(`brew "%s"`, b.pkg))
	}
	if b.cask != "" {
		lines = append(lines, fmt.Sprintf(`cask "%s"`, b.cask))
	}
	return lines

}

func NewBrew(ctx *pulumi.Context, project *Project, name string, args BrewArgs, opts pulumi.ResourceOption) (*Brew, error) {
	b := &Brew{}
	deps := []BrewDep{}
	deps = append(deps, args.Deps...)
	for _, c := range args.Components {
		deps = append(deps, c.GetDeps()...)
	}
	if err := ctx.RegisterComponentResource("pde:index:Brew", name, b, opts); err != nil {
		return nil, err
	}
	renderedDeps := render(deps)
	_, err := local.NewFile(ctx, "brewfile", &local.FileArgs{
		Force:   pulumi.Bool(true),
		Path:    pulumi.String(path.Join(project.Dir, "brew", "Brewfile")),
		Content: pulumi.ToStringArray(renderedDeps),
	})
	if err != nil {
		return nil, err
	}

	ctx.RegisterResourceOutputs(b, pulumi.Map{
		"ContentHash": pulumi.String(hashStrings(renderedDeps)),
	})

	return b, nil
}

type BrewPkg struct {
	Pkg string
	Tap *string
}

func render(pkgs []BrewDep) []string {
	lines := []string{}
	for _, pkg := range pkgs {
		lines = append(lines, pkg.Render()...)
	}
	return lines
}

func hashStrings(strings []string) string {
	h := sha256.New()
	for _, s := range strings {
		h.Write([]byte(s))
	}
	return fmt.Sprintf("%x", h.Sum(nil))
}
