package components

import (
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Npm struct {
	pulumi.ResourceState
}

func NewNpm(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*Npm, error) {
	n := &Npm{}
	if err := ctx.RegisterComponentResource("pde:index:Npm", name, n, opts); err != nil {
		return nil, err
	}

	installers.NewGitHubRepo(ctx, "nvm", &installers.GitHubRepoArgs{
		Branch:     pulumi.String("master"),
		Org:        pulumi.String("nvm-sh"),
		Repo:       pulumi.String("nvm"),
		FolderName: pulumi.String(".nvm"),
	})

	project.Profile.AddLines(
		pulumi.String(`export NVM_DIR="$HOME/.nvm"`),
		pulumi.String(`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`),
		pulumi.String(`[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion`),
	)

	npm := path.Join(project.Dir, "npm")
	installers.NewNpm(ctx, "npm-installer", &installers.NpmArgs{
		Location: pulumi.String(npm),
		Packages: pulumi.ToStringArray([]string{
			"ts-node",
			"npm-check-updates",
			"ts-node",
			"typescript",
			"lerna",
			"esbuild",
			"eslint_d",
			"cdk8s-cli",
			"aws-cdk",
			"pyright",
			"pnpm",
			"zx",
			"tree-sitter-cli",
			"cdktf-cli",
			"artillery",
		}),
	})
	project.Profile.AddToSystemPath(path.Join(npm, "node_modules", ".bin"))

	return n, nil
}
