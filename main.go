package main

import (
	"fmt"

	"github.com/corymhall/pde-pulumi/pkg/components"
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

		_, err = components.NewGitConfig(ctx, project, "gitconfig", nil)
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

		// java, err := components.NewJava(ctx, project, "java", nil)
		// if err != nil {
		// 	return fmt.Errorf("Error building java: %w", err)
		// }

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
		_, err = components.NewBrew(ctx, project, "Brew", components.BrewArgs{
			Deps: []string{
				"fd",
				"1password-cli",
				"ripgrep",
				"gh",
				"aws-vault",
				"fzf",
				"jq",
				"shellcheck",
				"libpq",
				"tmux",
				"pulumi",
				"pulumictl",
				"MisterTea/et/et",
				"tfenv",
				"font-monaspace-nerd-font",
				"gnupg",
				"pinentry-mac",
				"bash",
				"gradle",
				"openjdk@11",
				"hugo",
			},
			Components: []components.Component{neovim},
		}, pulumi.Parent(project))
		if err != nil {
			return err
		}

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
