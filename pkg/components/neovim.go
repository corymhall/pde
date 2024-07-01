package components

import (
	"fmt"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi-github/sdk/v6/go/github"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Neovim interface {
	Component
}

type neovim struct {
	pulumi.ResourceState
	*component
}

func NewNeovim(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (Neovim, error) {
	n := &neovim{
		component: NewComponent(),
	}
	if err := ctx.RegisterComponentResource("pde:index:Neovim", name, n, opts); err != nil {
		return nil, err
	}

	ref, err := github.GetRef(ctx, &github.GetRefArgs{
		Owner:      pulumi.StringRef("neovim"),
		Repository: "neovim",
		Ref:        "tags/v0.10.1",
	})
	if err != nil {
		return nil, err
	}

	// releaseCommands := pulumi.StringArray{
	// 	pulumi.String("xattr -c ./nvim-macos.tar.gz"),
	// 	pulumi.String("tar xzvf nvim-macos.tar.gz"),
	// 	pulumi.String("rm -rf $HOME/neovim"),
	// 	pulumi.String("mv nvim-macos $HOME/neovim"),
	// }
	installCommands := pulumi.ToStringArray([]string{
		fmt.Sprintf("rm -rf %s/neovim/share/nvim/runtime || true", project.Home.HomeLocation),
		`rm -r build/ || true`,
		`make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim" CMAKE_BUILD_TYPE=Release`,
		"make install",
	})
	_, err = installers.NewGitHubRepo(ctx, "neovim", &installers.GitHubRepoArgs{
		Org:             pulumi.String("neovim"),
		Repo:            pulumi.String("neovim"),
		FolderName:      pulumi.String("neovim-install"),
		Version:         pulumi.String(ref.Sha),
		InstallCommands: installCommands,
		UpdateCommands:  installCommands,
		UninstallCommands: pulumi.ToStringArray([]string{
			fmt.Sprintf("rm -rf %s/neovim", project.Home.HomeLocation),
			fmt.Sprintf("rm -rf %s/neovim-install", project.Home.HomeLocation),
		}),
	})
	if err != nil {
		return nil, err
	}

	n.AddDeps(
		BrewPackage("ninja"),
		BrewPackage("cmake"),
		BrewPackage("gettext"),
		BrewPackage("curl"),
	)

	n.AddToSystemPath(path.Join(project.Home.HomeVar, "neovim", "bin"))

	return n, nil
}
