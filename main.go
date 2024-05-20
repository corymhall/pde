package main

import (
	"fmt"
	"path"

	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/pulumi/pulumi-command/sdk/go/command/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {
		project, err := components.NewProject(ctx, "_dotfiles", nil)
		if err != nil {
			return err
		}

		neovim, err := components.NewNeovim(ctx, project, "neovim", nil)
		if err != nil {
			return err
		}

		aws, err := components.NewAwsCli(ctx, project, "awscli", nil)
		if err != nil {
			return err
		}

		if err := NewInstalls(ctx, project); err != nil {
			return err
		}

		python, err := components.NewPython(ctx, project, "python", nil)
		if err != nil {
			return err
		}

		if err := NewConfigs(ctx, project); err != nil {
			return err
		}

		npm, err := components.NewNpm(ctx, project, "npm", nil)
		if err != nil {
			return err
		}

		brew, err := components.NewBrew(ctx, project, "Brew", components.BrewArgs{
			Deps: []components.BrewDep{
				components.BrewPackage("fd"),
				components.BrewTapCask("", "1password-cli"),
				components.BrewPackage("ripgrep"),
				components.BrewPackage("gh"),
				components.BrewPackage("aws-vault"),
				components.BrewPackage("fzf"),
				components.BrewPackage("jq"),
				components.BrewPackage("shellcheck"),
				components.BrewPackage("libpq"),
				components.BrewPackage("tmux"),
				components.BrewFromTap("pulumi/tap", "pulumi"),
				components.BrewPackage("pulumictl"),
				components.BrewFromTap("mistertea/et", "MisterTea/et/et"),
				components.BrewPackage("tfenv"),
				components.BrewTapCask("homebrew/cask-fonts", "font-monaspace-nerd-font"),
				components.BrewPackage("gnupg"),
				components.BrewPackage("pinentry-mac"),
				components.BrewPackage("bash"),
				components.BrewPackage("gradle"),
				components.BrewPackage("openjdk@11"),
				components.BrewPackage("hugo"),
				components.BrewPackage("xcode-build-server"),
				components.BrewPackage("xcbeautify"),
				components.BrewPackage("ruby"),
				components.BrewPackage("atuin"),
				components.BrewPackage("swiftformat"),
				components.BrewPackage("swiftlint"),
				components.BrewPackage("eza"),
			},
			Components: []components.Component{neovim},
		}, pulumi.Parent(project))
		if err != nil {
			return err
		}
		local.NewCommand(ctx, "brew-bundle", &local.CommandArgs{
			Triggers: pulumi.Array{brew.ContentHash},
			Dir:      pulumi.String(path.Join(project.Dir, "brew")),
			Create:   pulumi.String("brew bundle"),
			Update:   pulumi.String("brew bundle --cleanup"),
			Delete:   pulumi.String("echo nothing to do here"),
		})

		if err := NewProfiles(ctx, project, ProfilesArgs{
			SystemPaths: pulumi.ToStringArray([]string{
				fmt.Sprintf("%s/.dotnet", project.Home.HomeLocation),
				"/opt/homebrew/opt/openjdk@11/bin",
			}),
			Env: map[string]pulumi.StringInput{
				"JAVA_HOME": pulumi.String("/opt/homebrew/opt/openjdk@11"),
			},
			Lines: pulumi.ToStringArray([]string{}),
			Components: []components.Component{
				neovim,
				python,
				aws,
				npm,
			},
		}, pulumi.Parent(project)); err != nil {
			return err
		}

		return nil
	})
}
