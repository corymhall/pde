package components

import (
	"fmt"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Python struct {
	pulumi.ResourceState
}

func NewPython(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*Python, error) {
	p := &Python{}
	if err := ctx.RegisterComponentResource("pde:index:Python", name, p, opts); err != nil {
		return nil, err
	}

	installers.NewGitHubRepo(ctx, "pyenv", &installers.GitHubRepoArgs{
		Org:        pulumi.String("pyenv"),
		Repo:       pulumi.String("pyenv"),
		Branch:     pulumi.String("master"),
		FolderName: pulumi.String(".pyenv"),
		InstallCommands: pulumi.ToStringArray([]string{
			"src/configure",
			"make -C src",
			fmt.Sprintf("./bin/pyenv install %s", "3.11.5"),
			fmt.Sprintf("./bin/pyenv global %s", "3.11.5"),
		}),
	})
	project.Profile.AddToEnv("PYENV_ROOT", pulumi.String("$HOME/.pyenv"))
	project.Profile.AddToSystemPath("$PYENV_ROOT/bin")
	project.Profile.AddLines(pulumi.String(`eval "$($HOME/.pyenv/bin/pyenv init -)"`))

	return p, nil
}
