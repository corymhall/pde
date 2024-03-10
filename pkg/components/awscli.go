package components

import (
	"fmt"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type AwsCli interface {
	Component
}

type awsCli struct {
	pulumi.ResourceState
	*component
}

func NewAwsCli(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (AwsCli, error) {
	a := &awsCli{
		component: NewComponent(),
	}
	if err := ctx.RegisterComponentResource("pde:index:AwsCli", name, a, opts); err != nil {
		return nil, err
	}

	a.AddLines(
		fmt.Sprintf("complete -C '%s/aws_completer' aws", project.Home.BinVar),
	)

	config, err := local.NewFile(ctx, "aws-config", &local.FileArgs{
		Force: pulumi.Bool(true),
		Path:  pulumi.String(path.Join(project.Dir, "aws", "choices.xml")),
		Content: pulumi.ToStringArray([]string{fmt.Sprintf(`
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <array>
    <dict>
      <key>choiceAttribute</key>
      <string>customLocation</string>
      <key>attributeSetting</key>
      <string>%s</string>
      <key>choiceIdentifier</key>
      <string>default</string>
    </dict>
  </array>
</plist>
		`, project.Home.HomeLocation)}),
	}, pulumi.Parent(a))
	if err != nil {
		return nil, err
	}

	_, err = installers.NewShell(ctx, "awscli-installer", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://awscli.amazonaws.com/AWSCLIV2.pkg"),
		ProgramName: pulumi.String("aws"),
		InstallCommands: pulumi.StringArray{
			pulumi.Sprintf("installer -pkg AWSCLIV2.pkg -target CurrentUserHomeDirectory -applyChoiceChangesXML %s", config.Path),
			pulumi.Sprintf("ln -s %s/aws-cli/aws %s/aws", project.Home.HomeLocation, project.Home.BinLocation),
			pulumi.Sprintf("ln -s %s/aws-cli/aws_completer %s/aws_completer", project.Home.HomeLocation, project.Home.BinLocation),
		},
		UninstallCommands: pulumi.StringArray{
			pulumi.Sprintf("rm -rf %s/aws_completer", project.Home.BinLocation),
			pulumi.Sprintf("rm -rf %s/aws", project.Home.BinLocation),
			pulumi.Sprintf("rm -rf %s/aws-cli/aws", project.Home.HomeLocation),
			pulumi.Sprintf("rm -rf %s/aws-cli/aws_completer", project.Home.HomeLocation),
		},
	}, pulumi.Parent(a))
	if err != nil {
		return nil, err
	}

	_, err = installers.NewShell(ctx, "samcli-installer", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-macos-arm64.pkg"),
		ProgramName: pulumi.String("sam"),
		InstallCommands: pulumi.StringArray{
			pulumi.Sprintf("installer -pkg aws-sam-cli-macos-arm64.pkg -target CurrentUserHomeDirectory -applyChoiceChangesXML %s", config.Path),
			pulumi.Sprintf("ln -s %s/aws-sam-cli/sam %s/sam", project.Home.HomeLocation, project.Home.BinLocation),
		},
		UpdateCommands: pulumi.StringArray{
			pulumi.Sprintf("installer -pkg aws-sam-cli-macos-arm64.pkg -target CurrentUserHomeDirectory -applyChoiceChangesXML %s", config.Path),
			pulumi.Sprintf("rm -rf %s/sam", project.Home.BinLocation),
			pulumi.Sprintf("ln -s %s/aws-sam-cli/sam %s/sam", project.Home.HomeLocation, project.Home.BinLocation),
		},
		UninstallCommands: pulumi.StringArray{
			pulumi.Sprintf("rm -rf %s/sam", project.Home.BinLocation),
			pulumi.Sprintf("rm -rf %s/aws-sam-cli/sam", project.Home.HomeLocation),
		},
	})
	if err != nil {
		return nil, err
	}

	_, err = installers.NewShell(ctx, "ssm-installer", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac_arm64/sessionmanager-bundle.zip"),
		ProgramName: pulumi.String("session-manager-plugin"),
		InstallCommands: pulumi.StringArray{
			pulumi.String("unzip -o sessionmanager-bundle.zip"),
			pulumi.Sprintf("./sessionmanager-bundle/install -i %s/.local/sessionmanagerplugin -b %s/session-manager-plugin", project.Home.HomeLocation, project.Home.BinLocation),
		},
		UpdateCommands: pulumi.StringArray{
			pulumi.String("unzip -o sessionmanager-bundle.zip"),
			pulumi.Sprintf("rm -rf %s/session-manager-plugin", project.Home.BinLocation),
			pulumi.Sprintf("rm -rf %s/.local/sessionmanagerplugin", project.Home.HomeLocation),
			pulumi.Sprintf("./sessionmanager-bundle/install -i %s/.local/sessionmanagerplugin -b %s/session-manager-plugin", project.Home.HomeLocation, project.Home.BinLocation),
		},
		UninstallCommands: pulumi.StringArray{
			pulumi.Sprintf("rm -rf %s/.local/sessionmanagerplugin", project.Home.HomeLocation),
			pulumi.Sprintf("rm -rf %s/session-manager-plugin", project.Home.BinLocation),
		},
	})
	if err != nil {
		return nil, err
	}

	return a, nil
}
