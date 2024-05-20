package components

import (
	"fmt"
	"path"
	"slices"
	"sort"
	"strings"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type ZshProfile struct {
	*Profile
	project *Project
}

type ZplugPlugin struct {
	PluginName    string
	PluginOptions map[string]*string
}

type ZshProfileArgs struct {
	Project     *Project
	Env         map[string]pulumi.StringInput
	SystemPaths []pulumi.StringInput
	ZshPlugins  []ZplugPlugin
	Aliases     map[string]string
	Lines       []pulumi.StringInput
}

func NewZshProfile(ctx *pulumi.Context, name string, args ZshProfileArgs, opts ...pulumi.ResourceOption) (*ZshProfile, error) {
	if args.Env == nil {
		args.Env = map[string]pulumi.StringInput{}
	}
	args.Env["ENHANCD_FILTER"] = pulumi.String("fzf")
	args.Env["ENHANCD_COMPLETION_BEHAVIOR"] = pulumi.String("list")
	args.Env["KEYTIMEOUT"] = pulumi.String("1")
	args.Env["NODE_OPTIONS"] = pulumi.String(`"--max-old-space-size=8196 --experimental-worker $${NODE_OPTIONS:-}"`)
	args.Env["SHELL"] = pulumi.String("/bin/zsh")

	zinit, err := installers.NewGitHubRepo(ctx, "zinit", &installers.GitHubRepoArgs{
		Org:        pulumi.String("zdharma-continuum"),
		Repo:       pulumi.String("zinit"),
		FolderName: pulumi.String(".zinit"),
	})
	if err != nil {
		return nil, err
	}
	args.Env["ZINIT_HOME"] = zinit.AbsFolderName
	args.SystemPaths = append(
		args.SystemPaths,
		pulumi.String("/opt/homebrew/bin"),
		pulumi.String(path.Join(args.Project.Home.HomeVar, "go", "bin")),
	)
	args.Project.Home.AddLocation(ctx, "p10k", LinkProps{
		Source: pulumi.String(path.Join(args.Project.Dir, name, "p10k.zsh")),
		Target: "p10k.zsh",
	})
	args.Project.Home.AddLocation(ctx, "functions", LinkProps{
		Source: pulumi.String(path.Join(args.Project.Dir, name, "functions.zsh")),
		Target: "functions.zsh",
	})

	if args.Lines == nil {
		args.Lines = []pulumi.StringInput{}
	}
	lines := []pulumi.StringInput{}
	lines = append(lines, renderPlugins(zinit.AbsFolderName, args.ZshPlugins)...)
	lines = append(lines, renderAliases(args.Project, args.Aliases)...)
	lines = append(lines,
		pulumi.String("# -----------------------------------------------------"),
		pulumi.String("# ----------------Standard Configuration---------------"),
		pulumi.String("# -----------------------------------------------------"),
		pulumi.String("source /Users/chall/.config/op/plugins.sh"),
		pulumi.Sprintf(`# To customize prompt, run "p10k configure" or edit %s/p10k.zsh.`, args.Project.Home.HomeVar),
		pulumi.Sprintf("[[ ! -f %s/p10k.zsh ]] || source %s/p10k.zsh", args.Project.Home.HomeVar, args.Project.Home.HomeVar),
		pulumi.String(""),
		pulumi.String(`HISTSIZE="10000"`),
		pulumi.String(`SAVEHIST="10000"`),
		pulumi.String(`export AWS_PAGER=""""`),
		pulumi.String(""),
		pulumi.Sprintf(`HISTFILE="%s/.zsh_history"`, args.Project.Home.HomeVar),
		pulumi.String(`mkdir -p "$(dirname "$HISTFILE")"`),
		pulumi.String("setopt HIST_FCNTL_LOCK"),
		pulumi.String("setopt HIST_IGNORE_DUPS"),
		pulumi.String("setopt HIST_IGNORE_SPACE"),
		pulumi.String("unsetopt HIST_EXPIRE_DUPS_FIRST"),
		pulumi.String("setopt SHARE_HISTORY"),
		pulumi.String("setopt EXTENDED_HISTORY"),
		pulumi.String("# vim mode"),
		pulumi.String("bindkey -v"),
		pulumi.String("bindkey '^ ' autosuggest-accept"),
		pulumi.String("bindkey '^[[A' history-substring-search-up"),
		pulumi.String("bindkey '^[[B' history-substring-search-down"),
		pulumi.String(`bindkey "$terminfo[kcuu1]" history-substring-search-up`),
		pulumi.String(`bindkey "$terminfo[kcud1]" history-substring-search-down`),
		pulumi.String(""),
		pulumi.String("# `v` is already mapped to visual mode, so we need to use a different key to"),
		pulumi.String("# # open Vim"),
		pulumi.String(`bindkey -M vicmd "^V" edit-command-line`),
		pulumi.String(""),
		pulumi.String("# Load secrets"),
		pulumi.Sprintf("[ -f %s/.localrc ] && . %s/.localrc", args.Project.Home.HomeVar, args.Project.Home.HomeVar),
		pulumi.String(""),
		pulumi.String("autoload bashcompinit && bashcompinit"),
		pulumi.String("autoload -Uz compinit && compinit"),
		// this just hangs forever
		// pulumi.String("eval \"$(op completion zsh)\"; compdef _op op"),
		pulumi.String(""),
		pulumi.String("# -----------------------------------------------------"),
		pulumi.String("# ----------------Component Configuration--------------"),
		pulumi.String("# -----------------------------------------------------"),
		pulumi.String(""),
	)
	lines = append(lines, args.Lines...)

	profile, err := NewProfile(ctx, "zsh", ProfileArgs{
		FileName:    "zshrc",
		Project:     args.Project,
		SystemPaths: args.SystemPaths,
		Env:         args.Env,
		Lines:       lines,
	}, opts...)
	if err != nil {
		return nil, err
	}

	z := &ZshProfile{
		Profile: profile,
		project: args.Project,
	}

	return z, nil
}

func renderAliases(project *Project, aliases map[string]string) []pulumi.StringInput {
	lines := []pulumi.StringInput{}
	fp := path.Join(project.Home.HomeVar, "functions.zsh")
	lines = append(lines,
		pulumi.String("# -----------------------------------------------------"),
		pulumi.String("# ----------Aliases and Functions Configuration--------"),
		pulumi.String("# -----------------------------------------------------"),
		pulumi.Sprintf("[[ ! -f %s ]] || source %s", fp, fp),
	)

	var keys []string
	for k := range aliases {
		keys = append(keys, k)
	}
	slices.Sort(keys)
	for _, v := range keys {
		lines = append(lines, pulumi.Sprintf("alias %s='%s'", v, aliases[v]))
	}
	lines = append(lines, pulumi.String(""))
	return lines
}

func renderPlugins(location pulumi.StringInput, plugins []ZplugPlugin) []pulumi.StringInput {
	lines := []pulumi.StringInput{}
	lines = append(lines,
		pulumi.String("# -----------------------------------------------------"),
		pulumi.String("# ------------Configure zinit and zsh plugins----------"),
		pulumi.String("# -----------------------------------------------------"),
		pulumi.Sprintf("source %s/zinit.zsh", location),
	)
	sort.SliceStable(plugins, func(i, j int) bool {
		return plugins[i].PluginName < plugins[j].PluginName
	})
	for _, zp := range plugins {
		op := []string{"zinit ice"}
		var keys []string
		for k := range zp.PluginOptions {
			keys = append(keys, k)
		}
		slices.Sort(keys)
		for _, k := range keys {
			if zp.PluginOptions[k] != nil {
				op = append(op, fmt.Sprintf(`%s"%s"`, k, *zp.PluginOptions[k]))
			} else {
				op = append(op, k)
			}
		}
		lines = append(lines, pulumi.String(strings.Join(op, " ")))
		lines = append(lines, pulumi.Sprintf(`zinit light "%s"`, zp.PluginName), pulumi.String(""))
	}
	return lines
}
