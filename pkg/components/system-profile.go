package components

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type SystemProfiles struct {
	pulumi.ResourceState
	profiles []*Profile
}

func NewSystemProfiles(ctx *pulumi.Context, name string, opts ...pulumi.ResourceOption) (*SystemProfiles, error) {
	profile := &SystemProfiles{
		profiles: []*Profile{},
	}
	if err := ctx.RegisterComponentResource("pde:index:SystemProfiles", name, profile); err != nil {
		return nil, err
	}
	return profile, nil
}

func (s *SystemProfiles) AddToEnv(key string, value pulumi.StringInput) {
	for _, p := range s.profiles {
		p.AddToEnv(key, value)
	}
}

func (s *SystemProfiles) AddToSystemPath(path string) {
	for _, p := range s.profiles {
		p.AddToSystemPath(path)
	}
}

func (s *SystemProfiles) AddLines(lines ...pulumi.StringInput) {
	for _, p := range s.profiles {
		p.AddLines(lines...)
	}
}

func (s *SystemProfiles) Register(profile *Profile) {
	s.profiles = append(s.profiles, profile)
}
