package components

import (
	"fmt"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
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

	// releaseCommands := pulumi.StringArray{
	// 	pulumi.String("xattr -c ./nvim-macos.tar.gz"),
	// 	pulumi.String("tar xzvf nvim-macos.tar.gz"),
	// 	pulumi.String("rm -rf $HOME/neovim"),
	// 	pulumi.String("mv nvim-macos $HOME/neovim"),
	// }
	installCommands := pulumi.ToStringArray([]string{
		fmt.Sprintf("rm -rf %s/neovim/share/nvim/runtime", project.Home.HomeLocation),
		`make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim" CMAKE_BUILD_TYPE=Release`,
		"make install",
	})
	installers.NewGitHubRepo(ctx, "neovim", &installers.GitHubRepoArgs{
		Org:             pulumi.String("neovim"),
		Repo:            pulumi.String("neovim"),
		FolderName:      pulumi.String("neovim-install"),
		Branch:          pulumi.String("master"),
		InstallCommands: installCommands,
		UpdateCommands:  installCommands,
		UninstallCommands: pulumi.ToStringArray([]string{
			fmt.Sprintf("rm -rf %s/neovim", project.Home.HomeLocation),
			fmt.Sprintf("rm -rf %s/neovim-install", project.Home.HomeLocation),
		}),
	})

	n.AddDeps(
		"ninja",
		"cmake",
		"gettext",
		"curl",
	)

	n.AddToSystemPath(path.Join(project.Home.HomeVar, "neovim", "bin"))

	return n, nil
}
