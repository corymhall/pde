package components

import (
	"fmt"
	"os"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/local"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Home struct {
	pulumi.ResourceState
	BinLocation  string
	HomeLocation string
	ConfigHome   string
	HomeVar      string
	BinVar       string
}

func NewHome(ctx *pulumi.Context, name string, opts pulumi.ResourceOption) (*Home, error) {
	homeDir, _ := os.UserHomeDir()
	config := path.Join(homeDir, ".config")
	bin := path.Join(homeDir, ".local", "bin")
	home := &Home{
		BinLocation:  bin,
		HomeLocation: homeDir,
		ConfigHome:   config,
		HomeVar:      "$HOME",
		BinVar:       path.Join("$HOME", ".local", "bin"),
	}
	if err := ctx.RegisterComponentResource("pde:index:Home", name, home, opts); err != nil {
		return nil, err
	}
	return home, nil
}

type LinkProps struct {
	Source pulumi.StringInput
	Target string
}

func (h *Home) AddLocation(ctx *pulumi.Context, id string, props LinkProps) (*local.Link, error) {
	target := path.Join(h.HomeLocation, props.Target)
	id = fmt.Sprintf("link%s", id)
	return local.NewLink(ctx, id, &local.LinkArgs{
		Source:    props.Source,
		Target:    pulumi.String(target),
		Overwrite: pulumi.BoolPtr(true),
	}, pulumi.Parent(h))
}

func (h *Home) AddExecutable(ctx *pulumi.Context, id string, props LinkProps) (*local.Link, error) {
	target := path.Join(h.BinLocation, props.Target)
	id = fmt.Sprintf("link%s", id)
	return local.NewLink(ctx, id, &local.LinkArgs{
		Source:    props.Source,
		Target:    pulumi.String(target),
		Overwrite: pulumi.BoolPtr(true),
	})
}
