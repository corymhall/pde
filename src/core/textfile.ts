import { File } from '@cdktf/provider-local/lib/file/index';
import { LocalProvider } from '@cdktf/provider-local/lib/provider';
import { Lazy, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';

export interface LocalFileProps {
  readonly filename: string;
  readonly lines?: string[];

}

export class LocalFile extends Construct {
  private readonly lines: string[];
  public readonly path: string;
  public readonly resource: File;
  constructor(scope: Construct, id: string, props: LocalFileProps) {
    super(scope, id);
    this.lines = props.lines ?? [];

    this.getOrCreateProvider();
    const file = new File(this, 'File', {
      filename: props.filename,
      content: Lazy.stringValue({ produce: () => this.lines?.join('\n') }),
    });
    this.resource = file;
    this.path = file.filename;
  }

  public addLine(line: string): void {
    this.lines.push(line);
  }
  private getOrCreateProvider(): LocalProvider {
    const id = 'LocalProvider';
    const stack = TerraformStack.of(this);
    return stack.node.tryFindChild(id) as LocalProvider ?? new LocalProvider(this, id);
  }

}
