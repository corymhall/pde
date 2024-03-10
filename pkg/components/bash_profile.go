package components

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type BashProfile struct {
	*Profile
}

type BashProfileArgs struct {
	Env         map[string]pulumi.StringInput
	SystemPaths []pulumi.StringInput
	Lines       []pulumi.StringInput
}

func NewBashProfile(ctx *pulumi.Context, project *Project, args BashProfileArgs, name string, opts ...pulumi.ResourceOption) (*BashProfile, error) {
	args.Lines = append(
		args.Lines,
		pulumi.String(""),
		pulumi.Sprintf("[ -f %s/.localrc ] && . %s/.localrc", project.Home.HomeVar, project.Home.HomeVar),
	)
	profile, err := NewProfile(ctx, name, ProfileArgs{
		FileName:    "bash_profile",
		SystemPaths: args.SystemPaths,
		Env:         args.Env,
		Lines:       args.Lines,
		Project:     project,
	}, opts...)
	if err != nil {
		return nil, err
	}
	b := &BashProfile{
		Profile: profile,
	}

	return b, err
}
