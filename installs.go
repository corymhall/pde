package main

import (
	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func NewInstalls(ctx *pulumi.Context, project *components.Project) error {
	installers.NewShell(ctx, "chtsh", &installers.ShellArgs{
		DownloadURL:     pulumi.String("https://cht.sh/:cht.sh"),
		ProgramName:     pulumi.String("cht.sh"),
		Executable:      pulumi.BoolPtr(true),
		InstallCommands: pulumi.StringArray{pulumi.String("mv :cht.sh cht.sh")},
	})

	installers.NewShell(ctx, "rust", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://static.rust-lang.org/rustup/dist/x86_64-apple-darwin/rustup-init"),
		InstallCommands: pulumi.StringArray{
			pulumi.String("chmod +x rustup-init"),
			pulumi.String("./rustup-init -y --no-modify-path"),
		},
		ProgramName: pulumi.String("rustup"),
	})
	project.Profile.AddToSystemPath("$HOME/.cargo/bin")

	installers.NewShell(ctx, "Wiz", &installers.ShellArgs{
		DownloadURL:     pulumi.String("https://wizcli.app.wiz.io/latest/wizcli-darwin-arm64"),
		ProgramName:     pulumi.String("wizcli"),
		InstallCommands: pulumi.StringArray{pulumi.String("mv wizcli-darwin-arm64 wizcli")},
		Executable:      pulumi.Bool(true),
	})

	return nil
}
