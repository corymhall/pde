import { Construct } from "constructs";
import { IZshProfile } from "../index.js";

export class TeaPackage {
  public static python(version?: string) {
    return new TeaPackage('python', 'python.org', version);
  }
  public static node(version?: string) {
    return new TeaPackage('node', 'nodejs.org', version);
  }
  public static gh(version?: string) {
    return new TeaPackage('gh', 'cli.github.com', version);
  }
  public static aws(version?: string) {
    return new TeaPackage('aws', 'aws.amazon.com/cli', version);
  }
  public static crate(crate: string, name?: string, version?: string) {
    return new TeaPackage(name ?? crate, `crates.io/${crate}`, version);
  }
  public static github(org: string, repo: string, name: string, version?: string) {
    return new TeaPackage(name, `github.com/${org}/${repo}`, version);
  }
  public static of(programName: string, packageName: string, version: string) {
    return new TeaPackage(programName, packageName, version);
  }
  constructor(
    public readonly programName: string,
    public readonly packageName: string,
    public readonly version?: string,
  ) { }
}

export interface TeaInstallerProps {
  readonly zshProfile: IZshProfile;
  readonly pkgs: TeaPackage[];
}

export class TeaInstaller extends Construct {
  constructor(scope: Construct, id: string, props: TeaInstallerProps) {
    super(scope, id);

    props.pkgs.forEach(pkg => {
      props.zshProfile.addAlias(
        pkg.programName,
        `tea +${pkg.packageName}${pkg.version ?? ''} ${pkg.programName}`,
      );
    });
  }
}
