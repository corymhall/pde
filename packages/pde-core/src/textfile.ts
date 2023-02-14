import { File } from '@cdktf/provider-local/lib/file';
import { Construct } from 'constructs';

export interface LocalFileProps {
  readonly filename: string;
  readonly lines?: string[];

}

export class LocalFile extends Construct {
  private readonly lines: string[] = [];
  public readonly path: string;
  constructor(scope: Construct, id: string, props: LocalFileProps) {
    super(scope, id);

    const file = new File(this, 'File', {
      filename: props.filename,
      content: this.lines?.join('\n'),
    });
    this.path = file.filename;
  }

  public addLine(line: string): void {
    this.lines.push(line);
  }
}
