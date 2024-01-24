package components

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type BashProfile struct {
	*Profile
}

func NewBashProfile(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*BashProfile, error) {
	profile, err := NewProfile(ctx, name, ProfileArgs{
		FileName: "bash_profile",
		Project:  project,
	}, opts)
	if err != nil {
		return nil, err
	}
	b := &BashProfile{
		Profile: profile,
	}

	b.AddLines(
		pulumi.String(""),
		pulumi.Sprintf("[ -f %s/.localrc ] && . %s/.localrc", project.Home.HomeVar, project.Home.HomeVar),
	)

	return b, err
}
