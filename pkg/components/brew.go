package components

import (
	"fmt"
	"path"
	"strings"

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
		Content: pulumi.ToStringArray(render(deps)),
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

func render(pkgs []string) []string {
	lines := []string{}
	for _, pkg := range pkgs {
		var tap string
		var cask string
		var brew string
		parts := strings.Split(pkg, "::")
		if len(parts) > 1 {
			tap = parts[0]
			brew = parts[1]
		} else {
			brew = parts[0]
		}
		parts = strings.Split(brew, "cask:")
		if len(parts) > 1 {
			cask = parts[1]
			brew = ""
		}
		if tap != "" {
			lines = append(lines, fmt.Sprintf(`tap "%s"`, tap))
		}
		if brew != "" {
			lines = append(lines, fmt.Sprintf(`brew "%s"`, brew))
		}
		if cask != "" {
			lines = append(lines, fmt.Sprintf(`cask "%s"`, cask))
		}
	}
	return lines
}
