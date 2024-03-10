package main

import (
	"github.com/corymhall/pde-pulumi/pkg/components"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type ProfilesArgs struct {
	Env         map[string]pulumi.StringInput
	SystemPaths []pulumi.StringInput
	Lines       []pulumi.StringInput
	Components  []components.Component
}

func NewProfiles(ctx *pulumi.Context, project *components.Project, args ProfilesArgs, opts ...pulumi.ResourceOption) error {
	if args.Env == nil {
		args.Env = map[string]pulumi.StringInput{}
	}
	args.Env["GOPRIVATE"] = pulumi.String("github.com/corymhall")
	args.SystemPaths = append(args.SystemPaths, pulumi.String(project.Home.BinLocation))

	for _, c := range args.Components {
		for k, v := range c.GetEnv() {
			args.Env[k] = v
		}
		for _, l := range c.GetLines() {
			args.Lines = append(args.Lines, l)
		}
		for _, p := range c.GetSystemPaths() {
			args.SystemPaths = append(args.SystemPaths, p)
		}
	}

	zsh, err := components.NewZshProfile(ctx, "zsh", components.ZshProfileArgs{
		Project:     project,
		Env:         args.Env,
		Lines:       args.Lines,
		SystemPaths: args.SystemPaths,
		Aliases: map[string]string{
			"ga":      "git add",
			"gcam":    "git commit -a -m",
			"gcb":     "git checkout -b",
			"gcl":     "git clone",
			"gcm":     "git checkout main",
			"gcmsg":   "git commit -m",
			"gco":     "git checkout",
			"gl":      "git pull",
			"gp":      "git push",
			"gst":     "git status",
			"nb":      "npm run build",
			"nv":      "nvim",
			"killgpg": "gpgconf --kill gpg-agent && gpg-connect-agent reloadagent /bye",
			"pn":      "pnpm",
		},
		ZshPlugins: []components.ZplugPlugin{
			{PluginName: "zsh-users/zsh-autosuggestions"},
			{
				PluginName: "zsh-users/zsh-completions",
			},
			{
				PluginName:    "changyuheng/fz",
				PluginOptions: map[string]*string{"wait": nil, "lucid": nil},
			},
			{
				PluginName:    "rupa/z",
				PluginOptions: map[string]*string{"pick": pulumi.StringRef("z.sh")},
			},
			{
				PluginName:    "changyuheng/zsh-interactive-cd",
				PluginOptions: map[string]*string{"wait": nil, "lucid": nil, "blockf": nil},
			},
			{
				PluginName:    "b4b4r07/enhancd",
				PluginOptions: map[string]*string{"pick": pulumi.StringRef("init.sh"), "wait": nil, "lucid": nil, "blockf": nil},
			},
			{PluginName: "zpm-zsh/ls"},
			{
				PluginName:    "romkatv/powerlevel10k",
				PluginOptions: map[string]*string{"depth": pulumi.StringRef("1")},
			},
			{
				PluginName: "zdharma-continuum/fast-syntax-highlighting",
			},
			{
				PluginName: "zsh-users/zsh-history-substring-search",
			},
		},
	}, opts...)
	if err != nil {
		return err
	}
	project.Profile.Register(zsh.Profile)

	bash, err := components.NewBashProfile(ctx, project, components.BashProfileArgs{
		Env:         args.Env,
		SystemPaths: args.SystemPaths,
		Lines:       args.Lines,
	}, "bash", opts...)
	if err != nil {
		return err
	}
	project.Profile.Register(bash.Profile)
	return nil
}
