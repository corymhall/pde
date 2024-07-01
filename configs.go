package main

import (
	"fmt"
	"os"
	"path"
	"path/filepath"

	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func NewConfigs(ctx *pulumi.Context, project *components.Project) error {
	// if _, err := local.NewLink(ctx, "bin", &local.LinkArgs{
	// 	Source:    pulumi.String(path.Join(project.Dir, "bin")),
	// 	Target:    pulumi.String(project.Home.BinLocation),
	// 	Recursive: pulumi.Bool(true),
	// 	Overwrite: pulumi.Bool(true),
	// }); err != nil {
	// 	return err
	// }

	wd, err := os.Getwd()
	if err != nil {
		return err
	}
	binDir := filepath.Join(wd, "_dotfiles/bin")
	entries, err := os.ReadDir(binDir)
	if err != nil {
		return err
	}
	for _, entry := range entries {
		if _, err := local.NewLinkV2(ctx, fmt.Sprintf("bin-%s", entry.Name()), &local.LinkV2Args{
			Overwrite: pulumi.BoolPtr(true),
			Source:    pulumi.String(filepath.Join(binDir, entry.Name())),
			Target:    pulumi.String(filepath.Join(project.Home.BinLocation, entry.Name())),
		}); err != nil {
			return err
		}
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

	if _, err := project.Home.AddLocation(ctx, "git-message", components.LinkProps{
		Source: pulumi.String(path.Join(project.Dir, "git", "gitmessage")),
		Target: ".gitmessage",
	}); err != nil {
		return err
	}

	if _, err := project.Home.AddLocation(ctx, "gpg-agent", components.LinkProps{
		Source: pulumi.String(path.Join(project.Dir, "gnupg", "gpg-agent.conf")),
		Target: path.Join(".gnupg", "gpg-agent.conf"),
	}); err != nil {
		return err
	}

	if _, err := project.Home.AddLocation(ctx, "gpg-conf", components.LinkProps{
		Source: pulumi.String(path.Join(project.Dir, "gnupg", "gpg.conf")),
		Target: path.Join(".gnupg", "gpg.conf"),
	}); err != nil {
		return err
	}

	if _, err := project.Home.AddLocation(ctx, "git-config", components.LinkProps{
		Source: pulumi.String(path.Join(project.Dir, "git", "config")),
		Target: path.Join(".config", "git", "config"),
	}); err != nil {
		return err
	}

	return nil
}
