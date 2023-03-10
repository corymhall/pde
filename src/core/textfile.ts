import { File } from '@cdktf/provider-local/lib/file/index.js';
import { Lazy, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { LocalProvider } from '@cdktf/provider-local/lib/provider/index.js';

export interface LocalFileProps {
  readonly filename: string;
  readonly lines?: string[];

}

export class LocalFile extends TerraformStack {
  private readonly lines: string[];
  public readonly path: string;
  public readonly resource: File;
  constructor(scope: Construct, id: string, props: LocalFileProps) {
    super(scope, id);
    this.lines = props.lines ?? [];

    new LocalProvider(this, 'LocalProvider');
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

}
