package components

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Component interface {
	AddDeps(deps ...BrewDep)
	AddLines(lines ...string)
	AddToSystemPath(location string)
	AddToEnv(key string, value string)

	GetDeps() []BrewDep
	GetEnv() map[string]pulumi.StringInput
	GetLines() []pulumi.StringInput
	GetSystemPaths() []pulumi.StringInput
}

type component struct {
	systemPaths []string
	env         map[string]string
	lines       []string
	deps        []BrewDep
}

func (c *component) AddDeps(deps ...BrewDep) {
	c.deps = append(c.deps, deps...)
}

func (c *component) AddLines(lines ...string) {
	c.lines = append(c.lines, lines...)
}

func (c *component) AddToSystemPath(location string) {
	c.systemPaths = append(c.systemPaths, location)
}

func (c *component) AddToEnv(key string, value string) {
	c.env[key] = value
}

func (c *component) GetDeps() []BrewDep {
	return c.deps
}

func (c *component) GetEnv() map[string]pulumi.StringInput {
	env := map[string]pulumi.StringInput{}

	for k, v := range c.env {
		env[k] = pulumi.String(v)
	}
	return env
}

func (c *component) GetLines() []pulumi.StringInput {
	lines := []pulumi.StringInput{}
	for _, l := range c.lines {
		lines = append(lines, pulumi.String(l))
	}
	return lines
}

func (c *component) GetSystemPaths() []pulumi.StringInput {
	paths := []pulumi.StringInput{}
	for _, p := range c.systemPaths {
		paths = append(paths, pulumi.String(p))
	}
	return paths
}

func NewComponent() *component {
	return &component{
		env:         map[string]string{},
		systemPaths: []string{},
		deps:        []BrewDep{},
		lines:       []string{},
	}
}
