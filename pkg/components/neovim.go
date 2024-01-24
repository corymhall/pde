package components

import (
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Neovim struct {
	pulumi.ResourceState
}

func NewNeovim(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*Neovim, error) {
	n := &Neovim{}
	if err := ctx.RegisterComponentResource("pde:index:Neovim", name, n, opts); err != nil {
		return nil, err
	}

	releaseCommands := pulumi.StringArray{
		pulumi.String("xattr -c ./nvim-macos.tar.gz"),
		pulumi.String("tar xzvf nvim-macos.tar.gz"),
		pulumi.String("rm -rf $HOME/neovim"),
		pulumi.String("mv nvim-macos $HOME/neovim"),
	}
	installers.NewGitHubRelease(ctx, "neovim", &installers.GitHubReleaseArgs{
		Org:             pulumi.String("neovim"),
		Repo:            pulumi.String("neovim"),
		ReleaseVersion:  pulumi.String("v0.9.4"),
		AssetName:       pulumi.String("nvim-macos.tar.gz"),
		InstallCommands: releaseCommands,
		UpdateCommands:  releaseCommands,
	})

	deps := []string{
		"libintl",
		"ninja",
		"libtool",
		"automake",
		"cmake",
		"pkg-config",
		"gettext",
		"curl",
	}
	for _, v := range deps {
		project.AddDep(v, nil)
	}
	project.Profile.AddToSystemPath(path.Join(project.Home.HomeVar, "neovim", "bin"))

	return n, nil
}
