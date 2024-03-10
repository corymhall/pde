package components

import (
	"fmt"
	"path"

	"github.com/corymhall/pulumi-provider-pde/sdk/go/pde/installers"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Java struct {
	pulumi.ResourceState
	SystemPaths []string
	Env         map[string]pulumi.StringInput
}

func NewJava(ctx *pulumi.Context, project *Project, name string, opts pulumi.ResourceOption) (*Java, error) {
	java := &Java{
		SystemPaths: []string{},
		Env:         map[string]pulumi.StringInput{},
	}
	if err := ctx.RegisterComponentResource("pde:index:Java", name, java, opts); err != nil {
		return nil, err
	}

	mvnLoc := path.Join(project.Home.HomeLocation, ".local")

	installers.NewShell(ctx, "java", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://download.java.net/java/GA/jdk21/fd2272bbf8e04c3dbaee13770090416c/35/GPL/openjdk-21_macos-aarch64_bin.tar.gz"),
		InstallCommands: pulumi.StringArray{
			pulumi.Sprintf("tar -C %s -xzvf openjdk-21_macos-aarch64_bin.tar.gz", mvnLoc),
		},
		ProgramName: pulumi.String("java"),
		UninstallCommands: pulumi.StringArray{
			pulumi.Sprintf("rm -rf %s", path.Join(mvnLoc, "openjdk-21_macos-aarch64_bin")),
		},
	}, pulumi.Parent(java))

	javaHome := path.Join(mvnLoc, "jdk-21.jdk", "Contents", "Home")
	java.Env["JAVA_HOME"] = pulumi.String(javaHome)
	java.SystemPaths = append(java.SystemPaths, "$JAVA_HOME/bin")

	installers.NewShell(ctx, "maven", &installers.ShellArgs{
		DownloadURL: pulumi.String("https://dlcdn.apache.org/maven/maven-3/3.9.4/binaries/apache-maven-3.9.4-bin.tar.gz"),
		Environment: pulumi.ToStringMap(map[string]string{
			"JAVA_HOME": javaHome,
		}),
		InstallCommands: pulumi.ToStringArray([]string{
			fmt.Sprintf("tar -C %s -xzvf apache-maven-3.9.4-bin.tar.gz", mvnLoc),
		}),
		ProgramName:    pulumi.String("mvn"),
		VersionCommand: pulumi.String(fmt.Sprintf("JAVA_HOME=%s %s/mvn --version", javaHome, path.Join(mvnLoc, "apache-maven-3.9.4/bin"))),
		UninstallCommands: pulumi.ToStringArray([]string{
			fmt.Sprintf("rm -rf %s", path.Join(mvnLoc, "apache-maven-3.9.4")),
		}),
	}, pulumi.Parent(java))
	java.SystemPaths = append(java.SystemPaths, fmt.Sprintf(path.Join(mvnLoc, "apache-maven-3.9.4", "bin")))

	return java, nil
}
