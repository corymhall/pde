package main

import (
	"path"

	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func NewConfigs(ctx *pulumi.Context, project *components.Project) error {
	if _, err := local.NewLink(ctx, "bin", &local.LinkArgs{
		Source:    pulumi.String(path.Join(project.Dir, "bin")),
		Target:    pulumi.String(project.Home.BinLocation),
		Recursive: pulumi.Bool(true),
	}); err != nil {
		return err
	}

	if _, err := local.NewLink(ctx, "kitty", &local.LinkArgs{
		Source: pulumi.String(path.Join(project.Dir, "kitty")),
		Target: pulumi.String(path.Join(project.Home.ConfigHome, "kitty")),
	}); err != nil {
		return err
	}

	if _, err := local.NewLink(ctx, "nvim-config", &local.LinkArgs{
		Source: pulumi.String(path.Join(project.Dir, "nvim")),
		Target: pulumi.String(path.Join(project.Home.HomeLocation, ".config", "nvim")),
	}); err != nil {
		return err
	}

	if _, err := local.NewLink(ctx, "tmux-config", &local.LinkArgs{
		Source: pulumi.String(path.Join(project.Dir, "tmux")),
		Target: pulumi.String(path.Join(project.Home.HomeLocation, ".config", "tmux")),
	}); err != nil {
		return err
	}

	return nil
}
