package components

import (
	"os"
	"path"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Project struct {
	pulumi.ResourceState
	Home    *Home
	Profile *SystemProfiles
	Dir     string
	Name    string
	TmpDir  string
	brew    *Brew
}

func NewProject(ctx *pulumi.Context, name string, opts pulumi.ResourceOption) (*Project, error) {
	wd, _ := os.Getwd()
	tmp := os.TempDir()
	dir := path.Join(wd, name)
	p := &Project{
		TmpDir: tmp,
		Dir:    dir,
		Name:   "dotfiles",
	}
	if err := ctx.RegisterComponentResource("pde:index:Project", name, p, opts); err != nil {
		return nil, err
	}
	brew, err := NewBrew(ctx, p, "Brew", pulumi.Parent(p))
	if err != nil {
		return nil, err
	}
	home, err := NewHome(ctx, "Home", pulumi.Parent(p))
	if err != nil {
		return nil, err
	}
	profile, err := NewSystemProfiles(ctx, "SystemProfile", pulumi.Parent(p))
	if err != nil {
		return nil, err
	}
	p.Home = home
	p.Profile = profile
	p.brew = brew
	return p, nil
}

func (p *Project) AddDep(pkg string, tap *string) {
	p.brew.Install(pkg, tap)
}
