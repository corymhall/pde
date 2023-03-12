import { Construct } from 'constructs';
import { Project } from '../../core';

export class TeaPackage {
  public static python(version?: string) {
    return new TeaPackage('python.org', 'python', version);
  }
  public static node(version?: string) {
    return new TeaPackage('nodejs.org', 'node', version);
  }
  public static gh(version?: string) {
    return new TeaPackage('cli.github.com', 'gh', version);
  }
  public static aws(version?: string) {
    return new TeaPackage('aws.amazon.com/cli', 'aws', version);
  }
  public static fromCratesIO(crate: string, name?: string, version?: string) {
    return new TeaPackage(`crates.io/${crate}`, name ?? crate, version);
  }
  public static fromGitHub(org: string, repo: string, name?: string, version?: string) {
    return new TeaPackage(`github.com/${org}/${repo}`, name ?? repo, version);
  }
  public static of(packageName: string, executableName: string, version?: string) {
    return new TeaPackage(packageName, executableName, version);
  }
  constructor(
    public readonly packageName: string,
    public readonly executableName: string,
    public readonly version?: string,
  ) { }
}

export interface TeaInstallerProps {
  readonly pkgs: TeaPackage[];
}

export class TeaInstaller extends Construct {
  constructor(scope: Construct, id: string, props: TeaInstallerProps) {
    super(scope, id);

    const project = Project.ofProject(this);
    props.pkgs.forEach(pkg => {
      project.profile.addAlias(
        pkg.executableName,
        `tea +${pkg.packageName}${pkg.version ?? ''} ${pkg.executableName}`,
      );
    });
  }
}
