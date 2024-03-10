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

type BrewArgs struct {
	Deps       []string
	Components []Component
}

func NewBrew(ctx *pulumi.Context, project *Project, name string, args BrewArgs, opts pulumi.ResourceOption) (*Brew, error) {
	b := &Brew{}
	deps := []string{}
	deps = append(deps, args.Deps...)
	for _, c := range args.Components {
		deps = append(deps, c.GetDeps()...)
	}
	if err := ctx.RegisterComponentResource("pde:index:Brew", name, b, opts); err != nil {
		return nil, err
	}
	_, err := local.NewFile(ctx, "brewfile", &local.FileArgs{
		Force:   pulumi.Bool(true),
		Path:    pulumi.String(path.Join(project.Dir, "brew", "Brewfile")),
		Content: pulumi.ToStringArray(deps),
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
