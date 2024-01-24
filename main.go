package main

import (
	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {
		project, err := components.NewProject(ctx, "_dotfiles", nil)
		if err != nil {
			return err
		}
		if err := NewProfiles(ctx, project); err != nil {
			return err
		}
		project.AddDep("fd", nil)
		project.AddDep("ripgrep", nil)
		project.AddDep("gh", nil)
		project.AddDep("aws-vault", nil)
		project.AddDep("fzf", nil)
		project.AddDep("jq", nil)
		project.AddDep("shellcheck", nil)
		project.AddDep("libpq", nil)
		project.AddDep("exa", nil)
		project.AddDep("tmux", nil)
		project.AddDep("pulumi", pulumi.StringRef("pulumi/tap"))
		project.AddDep("pulumictl", pulumi.StringRef("pulumi/tap"))
		project.AddDep("MisterTea/et/et", pulumi.StringRef("mistertea/et"))
		project.AddDep("tfenv", nil)
		project.AddDep("cask:font-hack-nerd-font", pulumi.StringRef("homebrew/cask-fonts"))
		project.AddDep("font-monaspace", pulumi.StringRef("homebrew/cask-fonts"))

		_, err = components.NewNeovim(ctx, project, "neovim", nil)
		if err != nil {
			return err
		}

		if _, err := components.NewGitConfig(ctx, project, "gitconfig", nil); err != nil {
			return err
		}

		if _, err := components.NewAwsCli(ctx, project, "awscli", nil); err != nil {
			return err
		}

		if err := NewInstalls(ctx, project); err != nil {
			return err
		}

		if _, err := components.NewJava(ctx, project, "java", nil); err != nil {
			return err
		}

		if _, err := components.NewPython(ctx, project, "python", nil); err != nil {
			return err
		}

		if err := NewConfigs(ctx, project); err != nil {
			return err
		}

		return nil
	})
}
