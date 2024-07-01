package main

import (
	"fmt"
	"path"

	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func NewInstalls(ctx *pulumi.Context, project *components.Project) error {
	if _, err := installers.NewShell(ctx, "chtsh", &installers.ShellArgs{
		DownloadURL:     pulumi.String("https://cht.sh/:cht.sh"),
		ProgramName:     pulumi.String("cht.sh"),
		Executable:      pulumi.BoolPtr(true),
		InstallCommands: pulumi.StringArray{pulumi.String("mv :cht.sh cht.sh")},
	}); err != nil {
		return err
	}

	if _, err := installers.NewShell(ctx, "rust", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://static.rust-lang.org/rustup/dist/x86_64-apple-darwin/rustup-init"),
		InstallCommands: pulumi.StringArray{
			pulumi.String("chmod +x rustup-init"),
			pulumi.String("./rustup-init -y --no-modify-path"),
		},
		ProgramName: pulumi.String("rustup"),
	}); err != nil {
		return err
	}
	// project.Profile.AddToSystemPath("$HOME/.cargo/bin")

	if _, err := installers.NewShell(ctx, "Wiz", &installers.ShellArgs{
		DownloadURL:     pulumi.String("https://wizcli.app.wiz.io/latest/wizcli-darwin-arm64"),
		ProgramName:     pulumi.String("wizcli"),
		InstallCommands: pulumi.StringArray{pulumi.String("mv wizcli-darwin-arm64 wizcli")},
		Executable:      pulumi.Bool(true),
	}); err != nil {
		return err
	}

	if _, err := installers.NewShell(ctx, "dotnet", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://dot.net/v1/dotnet-install.sh"),
		ProgramName: pulumi.String("dotnet"),
		Executable:  pulumi.BoolPtr(false),
		InstallCommands: pulumi.ToStringArray([]string{
			"chmod +x dotnet-install.sh",
			fmt.Sprintf("./dotnet-install.sh -c 6.0 --install-dir %s", path.Join(project.Home.HomeLocation, ".dotnet")),
		}),
		UninstallCommands: pulumi.ToStringArray([]string{
			fmt.Sprintf("rm -rf %s", path.Join(project.Home.HomeLocation, ".dotnet")),
		}),
		VersionCommand: pulumi.Sprintf("%s/.dotnet/dotnet --version", project.Home.HomeLocation),
	}); err != nil {
		return err
	}

	// installers.NewShell(ctx, "docker", &installers.ShellArgs{
	// DownloadURL: pulumi.String("https://desktop.docker.com/mac/main/arm64/139021/Docker.dmg"),
	// ProgramName: pulumi.String("docker"),
	// Executable:  pulumi.BoolPtr(false),
	// InstallCommands: pulumi.ToStringArray([]string{
	// "sudo hdiutil attach Docker.dmg",
	// "sudo /Volumes/Docker/Docker.app/Contents/MacOS/install",
	// "sudo hdiutil detach /Volumes/Docker",
	// }),
	// })
	// installers.NewGitHubRepo(ctx, "tpm", &installers.GitHubRepoArgs{
	// 	Branch:     pulumi.String("master"),
	// 	FolderName: pulumi.Sprintf("%s/%s", project.Home.HomeLocation, ".tmux/plugins/tpm"),
	// 	Org:        pulumi.String("tmux-plugins"),
	// 	Repo:       pulumi.String("tpm"),
	// })

	return nil
}
