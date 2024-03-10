package components

import (
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type GitConfig struct {
	pulumi.ResourceState
}

func NewGitConfig(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*GitConfig, error) {
	gitConfig := &GitConfig{}
	if err := ctx.RegisterComponentResource("pde:index:GitConfig", name, gitConfig, opts); err != nil {
		return nil, err
	}

	gm, err := local.NewFile(ctx, "git-message", &local.FileArgs{
		Path:  pulumi.String(path.Join(project.Dir, "git", "gitmessage")),
		Force: pulumi.Bool(true),
		Content: pulumi.StringArray{
			pulumi.String("# Header - #"),
			pulumi.String("# <type>(<scope>): <subject>"),
			pulumi.String("# No more than 80 chars. #### 80 chars is ############################## here: #"),
			pulumi.String(""),
			pulumi.String("# Remember blank line between title and body."),
			pulumi.String(""),
			pulumi.String("# Body"),
			pulumi.String("# The body should include the motivation for the change and contrast this with previous behavior."),
			pulumi.String("# Wrap at 72 chars. ################################## which is here: #"),
			pulumi.String("#"),
			pulumi.String(""),
			pulumi.String("# Footer"),
			pulumi.String("# The footer should contain any information about Breaking Changes and is also the place"),
			pulumi.String("# to reference GitHub issues that this commit closes."),
			pulumi.String("# BREAKING CHANGE: ..."),
			pulumi.String("# Closes #123, #124"),
			pulumi.String("# re #123, #124"),
		},
	})
	if err != nil {
		return nil, err
	}
	project.Home.AddLocation(ctx, "git-message", LinkProps{
		Source: gm.Path,
		Target: ".gitmessage",
	})

	gpgAgentFile, err := local.NewFile(ctx, "gpg-agent", &local.FileArgs{
		Path:  pulumi.String(path.Join(project.Dir, "gnupg", "gpg-agent.conf")),
		Force: pulumi.Bool(true),
		Content: pulumi.StringArray{
			pulumi.String("default-cache-ttl 28800"),
			pulumi.String("max-cache-ttl 28800"),
			pulumi.String(`pinentry-program /opt/homebrew/bin/pinentry-mac`),
		},
	})
	if err != nil {
		return nil, err
	}
	project.Home.AddLocation(ctx, "gpg-agent", LinkProps{
		Source: gpgAgentFile.Path,
		Target: path.Join(".gnupg", "gpg-agent.conf"),
	})

	gpgFile, err := local.NewFile(ctx, "gpg-conf", &local.FileArgs{
		Path:  pulumi.String(path.Join(project.Dir, "gnupg", "gpg.conf")),
		Force: pulumi.Bool(true),
		Content: pulumi.StringArray{
			pulumi.String("use-agent"),
		},
	})
	if err != nil {
		return nil, err
	}
	project.Home.AddLocation(ctx, "gpg-conf", LinkProps{
		Source: gpgFile.Path,
		Target: path.Join(".gnupg", "gpg.conf"),
	})

	gc, err := local.NewFile(ctx, "git-config", &local.FileArgs{
		Path:  pulumi.String(path.Join(project.Dir, "git", "config")),
		Force: pulumi.Bool(true),
		Content: pulumi.StringArray{
			pulumi.String(""),
			pulumi.String("[core]"),
			pulumi.String(`  editor = "nvim"`),
			pulumi.String("  fsmonitor = true"),
			pulumi.String("  untrackedcache = true"),
			pulumi.String(""),
			pulumi.String("[credential]"),
			pulumi.String(`  helper = "store"`),
			pulumi.String(""),
			pulumi.String("[diff]"),
			pulumi.String(""),
			pulumi.String("[fetch]"),
			pulumi.String("  prune = true"),
			pulumi.String(""),
			pulumi.String("[github]"),
			pulumi.String(`  user = "corymhall"`),
			pulumi.String(""),
			pulumi.String("[init]"),
			pulumi.String(`  defaultBranch = "main"`),
			pulumi.String(""),
			pulumi.String("[pull]"),
			pulumi.String("  rebase = true"),
			pulumi.String(""),
			pulumi.String("[push]"),
			pulumi.String(`  default = "simple"`),
			pulumi.String("  autoSetupRemote = true"),
			pulumi.String(""),
			pulumi.String("[commit]"),
			pulumi.String(`  template = "~/.gitmessage"`),
			pulumi.String("  gpgsign = true"),
			pulumi.String(""),
			pulumi.String("[user]"),
			pulumi.String(`  email = "43035978+corymhall@users.noreply.github.com"`),
			pulumi.String(`  name = "corymhall"`),
			pulumi.String(`  signingkey = "10E0136E71568E18"`),
			pulumi.String(`[url "https://github.com/"]`),
			pulumi.String("insteadOf = git@github.com:"),
			pulumi.String(`[url "https://github.com/"]`),
			pulumi.String("insteadOf = ssh://git@github.com/"),
		},
	})
	project.Home.AddLocation(ctx, "git-config", LinkProps{
		Source: gc.Path,
		Target: path.Join(".config", "git", "config"),
	})
	return gitConfig, nil
}
