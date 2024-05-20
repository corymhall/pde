package components

import (
	"encoding/json"
	"fmt"
	"os"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Npm interface {
	Component
}

type npm struct {
	pulumi.ResourceState
	*component
}

func NewNpm(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (Npm, error) {
	n := &npm{
		component: NewComponent(),
	}
	if err := ctx.RegisterComponentResource("pde:index:Npm", name, n, opts); err != nil {
		return nil, err
	}

	repo, err := installers.NewGitHubRepo(ctx, "nvm", &installers.GitHubRepoArgs{
		Branch:     pulumi.String("master"),
		Org:        pulumi.String("nvm-sh"),
		Repo:       pulumi.String("nvm"),
		FolderName: pulumi.String(".nvm"),
	})
	if err != nil {
		return nil, fmt.Errorf("error creating nvm repo: %w", err)
	}

	content := map[string]interface{}{
		"name":         "npm",
		"scripts":      map[string]string{},
		"dependencies": map[string]string{},
		"main":         "lib/index.js",
		"license":      "Apache-2.0",
		"version":      "0.0.0",
	}
	contentString, err := json.MarshalIndent(content, "", "\t")
	if err != nil {
		return nil, err
	}
	if _, err := os.Lstat(path.Join(project.Dir, "npm", "package.json")); os.IsNotExist(err) {
		if err := os.WriteFile(path.Join(project.Dir, "npm", "package.json"), contentString, 0644); err != nil {
			return nil, err
		}
	}

	n.AddLines(
		`export NVM_DIR="$HOME/.nvm"`,
		`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`,
		`[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion`,
	)

	packages := []string{
		"ts-node",
		"npm-check-updates",
		"esbuild",
		"tree-sitter-cli",
		"aws-cdk",
	}

	npm := path.Join(project.Dir, "npm")
	for _, p := range packages {
		installers.NewNpm(ctx, p, &installers.NpmArgs{
			Location: pulumi.String(npm),
			Package:  pulumi.String(p),
		}, pulumi.DependsOn([]pulumi.Resource{repo}))
	}
	n.AddToSystemPath(path.Join(npm, "node_modules", ".bin"))

	return n, nil
}
