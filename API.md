# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCliInstaller <a name="AwsCliInstaller" id="pde.AwsCliInstaller"></a>

#### Initializers <a name="Initializers" id="pde.AwsCliInstaller.Initializer"></a>

```typescript
import { AwsCliInstaller } from 'pde'

new AwsCliInstaller(scope: Construct, id: string, _options?: AwsCliInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.AwsCliInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.Initializer.parameter._options">_options</a></code> | <code><a href="#pde.AwsCliInstallerOptions">AwsCliInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.AwsCliInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.AwsCliInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `_options`<sup>Optional</sup> <a name="_options" id="pde.AwsCliInstaller.Initializer.parameter._options"></a>

- *Type:* <a href="#pde.AwsCliInstallerOptions">AwsCliInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.AwsCliInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.AwsCliInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.AwsCliInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.AwsCliInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.AwsCliInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.AwsCliInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.AwsCliInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.AwsCliInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.AwsCliInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.AwsCliInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.AwsCliInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.AwsCliInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.AwsCliInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.AwsCliInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.AwsCliInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.AwsCliInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.AwsCliInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.AwsCliInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.AwsCliInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.AwsCliInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.AwsCliInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.AwsCliInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.AwsCliInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.AwsCliInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.AwsCliInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.AwsCliInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.AwsCliInstaller.isConstruct"></a>

```typescript
import { AwsCliInstaller } from 'pde'

AwsCliInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.AwsCliInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.AwsCliInstaller.isStack"></a>

```typescript
import { AwsCliInstaller } from 'pde'

AwsCliInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.AwsCliInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.AwsCliInstaller.of"></a>

```typescript
import { AwsCliInstaller } from 'pde'

AwsCliInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.AwsCliInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.AwsCliInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.AwsCliInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.AwsCliInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.AwsCliInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.AwsCliInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.AwsCliInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---


### BashProfile <a name="BashProfile" id="pde.BashProfile"></a>

- *Implements:* <a href="#pde.IProfile">IProfile</a>

#### Initializers <a name="Initializers" id="pde.BashProfile.Initializer"></a>

```typescript
import { BashProfile } from 'pde'

new BashProfile(scope: Construct, id: string, options: BashProfileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.BashProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.BashProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.BashProfile.Initializer.parameter.options">options</a></code> | <code><a href="#pde.BashProfileOptions">BashProfileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.BashProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.BashProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.BashProfile.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.BashProfileOptions">BashProfileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.BashProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.BashProfile.addLines">addLines</a></code> | Add additional lines to the system profile. |
| <code><a href="#pde.BashProfile.addToEnv">addToEnv</a></code> | Add additional environment variables. |
| <code><a href="#pde.BashProfile.addToSystemPath">addToSystemPath</a></code> | Add additional paths to the system PATH. |

---

##### `toString` <a name="toString" id="pde.BashProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLines` <a name="addLines" id="pde.BashProfile.addLines"></a>

```typescript
public addLines(lines: string[]): void
```

Add additional lines to the system profile.

###### `lines`<sup>Required</sup> <a name="lines" id="pde.BashProfile.addLines.parameter.lines"></a>

- *Type:* string[]

---

##### `addToEnv` <a name="addToEnv" id="pde.BashProfile.addToEnv"></a>

```typescript
public addToEnv(name: string, value: string): void
```

Add additional environment variables.

###### `name`<sup>Required</sup> <a name="name" id="pde.BashProfile.addToEnv.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.BashProfile.addToEnv.parameter.value"></a>

- *Type:* string

---

##### `addToSystemPath` <a name="addToSystemPath" id="pde.BashProfile.addToSystemPath"></a>

```typescript
public addToSystemPath(systemPath: string): void
```

Add additional paths to the system PATH.

###### `systemPath`<sup>Required</sup> <a name="systemPath" id="pde.BashProfile.addToSystemPath.parameter.systemPath"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.BashProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="pde.BashProfile.isConstruct"></a>

```typescript
import { BashProfile } from 'pde'

BashProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.BashProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.BashProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.BashProfile.property.profileFileName">profileFileName</a></code> | <code>string</code> | The name of the profile file. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.BashProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.BashProfile.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The name of the profile file.

e.g. .zshrc, .bashrc, etc

---


### DotnetInstaller <a name="DotnetInstaller" id="pde.DotnetInstaller"></a>

#### Initializers <a name="Initializers" id="pde.DotnetInstaller.Initializer"></a>

```typescript
import { DotnetInstaller } from 'pde'

new DotnetInstaller(scope: Construct, id: string, options: DotnetInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.DotnetInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.DotnetInstallerOptions">DotnetInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.DotnetInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.DotnetInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.DotnetInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.DotnetInstallerOptions">DotnetInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.DotnetInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.DotnetInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.DotnetInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.DotnetInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.DotnetInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.DotnetInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.DotnetInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.DotnetInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.DotnetInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.DotnetInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.DotnetInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.DotnetInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.DotnetInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.DotnetInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.DotnetInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.DotnetInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.DotnetInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.DotnetInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.DotnetInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.DotnetInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.DotnetInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.DotnetInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.DotnetInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.DotnetInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.DotnetInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.DotnetInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.DotnetInstaller.isConstruct"></a>

```typescript
import { DotnetInstaller } from 'pde'

DotnetInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.DotnetInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.DotnetInstaller.isStack"></a>

```typescript
import { DotnetInstaller } from 'pde'

DotnetInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.DotnetInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.DotnetInstaller.of"></a>

```typescript
import { DotnetInstaller } from 'pde'

DotnetInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.DotnetInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.DotnetInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.DotnetInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.DotnetInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.DotnetInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.DotnetInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.DotnetInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `name`<sup>Required</sup> <a name="name" id="pde.DotnetInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### GitHubReleaseInstaller <a name="GitHubReleaseInstaller" id="pde.GitHubReleaseInstaller"></a>

#### Initializers <a name="Initializers" id="pde.GitHubReleaseInstaller.Initializer"></a>

```typescript
import { GitHubReleaseInstaller } from 'pde'

new GitHubReleaseInstaller(scope: Construct, id: string, options: GitHubReleaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubReleaseInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.GitHubReleaseOptions">GitHubReleaseOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.GitHubReleaseInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.GitHubReleaseInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.GitHubReleaseInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.GitHubReleaseOptions">GitHubReleaseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.GitHubReleaseInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.GitHubReleaseInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.GitHubReleaseInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.GitHubReleaseInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.GitHubReleaseInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.GitHubReleaseInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.GitHubReleaseInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.GitHubReleaseInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.GitHubReleaseInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.GitHubReleaseInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.GitHubReleaseInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.GitHubReleaseInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.GitHubReleaseInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.GitHubReleaseInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.GitHubReleaseInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.GitHubReleaseInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.GitHubReleaseInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.GitHubReleaseInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.GitHubReleaseInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.GitHubReleaseInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.GitHubReleaseInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.GitHubReleaseInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.GitHubReleaseInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.GitHubReleaseInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.GitHubReleaseInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.GitHubReleaseInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.GitHubReleaseInstaller.isConstruct"></a>

```typescript
import { GitHubReleaseInstaller } from 'pde'

GitHubReleaseInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.GitHubReleaseInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.GitHubReleaseInstaller.isStack"></a>

```typescript
import { GitHubReleaseInstaller } from 'pde'

GitHubReleaseInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.GitHubReleaseInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.GitHubReleaseInstaller.of"></a>

```typescript
import { GitHubReleaseInstaller } from 'pde'

GitHubReleaseInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.GitHubReleaseInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubReleaseInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.GitHubReleaseInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.GitHubReleaseInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.GitHubReleaseInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.GitHubReleaseInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.GitHubReleaseInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `name`<sup>Required</sup> <a name="name" id="pde.GitHubReleaseInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### GitHubRepoInstaller <a name="GitHubRepoInstaller" id="pde.GitHubRepoInstaller"></a>

#### Initializers <a name="Initializers" id="pde.GitHubRepoInstaller.Initializer"></a>

```typescript
import { GitHubRepoInstaller } from 'pde'

new GitHubRepoInstaller(scope: Construct, id: string, options: GitHubRepoOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubRepoInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.GitHubRepoOptions">GitHubRepoOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.GitHubRepoInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.GitHubRepoInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.GitHubRepoInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.GitHubRepoOptions">GitHubRepoOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.GitHubRepoInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.GitHubRepoInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.GitHubRepoInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.GitHubRepoInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.GitHubRepoInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.GitHubRepoInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.GitHubRepoInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.GitHubRepoInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.GitHubRepoInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.GitHubRepoInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.GitHubRepoInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.GitHubRepoInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.GitHubRepoInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.GitHubRepoInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.GitHubRepoInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.GitHubRepoInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.GitHubRepoInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.GitHubRepoInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.GitHubRepoInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.GitHubRepoInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.GitHubRepoInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.GitHubRepoInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.GitHubRepoInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.GitHubRepoInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.GitHubRepoInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.GitHubRepoInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.GitHubRepoInstaller.isConstruct"></a>

```typescript
import { GitHubRepoInstaller } from 'pde'

GitHubRepoInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.GitHubRepoInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.GitHubRepoInstaller.isStack"></a>

```typescript
import { GitHubRepoInstaller } from 'pde'

GitHubRepoInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.GitHubRepoInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.GitHubRepoInstaller.of"></a>

```typescript
import { GitHubRepoInstaller } from 'pde'

GitHubRepoInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.GitHubRepoInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubRepoInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.GitHubRepoInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.property.absolutePathVar">absolutePathVar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.GitHubRepoInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.GitHubRepoInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.GitHubRepoInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.GitHubRepoInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `absolutePathVar`<sup>Required</sup> <a name="absolutePathVar" id="pde.GitHubRepoInstaller.property.absolutePathVar"></a>

```typescript
public readonly absolutePathVar: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="pde.GitHubRepoInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### Home <a name="Home" id="pde.Home"></a>

- *Implements:* <a href="#pde.IHome">IHome</a>

The users home directory.

This component allows for adding files/directories to home

#### Initializers <a name="Initializers" id="pde.Home.Initializer"></a>

```typescript
import { Home } from 'pde'

new Home(scope: Construct, id: string, options?: HomeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Home.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.Home.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.Home.Initializer.parameter.options">options</a></code> | <code><a href="#pde.HomeOptions">HomeOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.Home.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.Home.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="pde.Home.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.HomeOptions">HomeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Home.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.Home.addExecutable">addExecutable</a></code> | Add a global executable. |
| <code><a href="#pde.Home.addLocation">addLocation</a></code> | Add a file or directory to a place within home. |

---

##### `toString` <a name="toString" id="pde.Home.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExecutable` <a name="addExecutable" id="pde.Home.addExecutable"></a>

```typescript
public addExecutable(scope: Construct, source: string, target: string): void
```

Add a global executable.

###### `scope`<sup>Required</sup> <a name="scope" id="pde.Home.addExecutable.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `source`<sup>Required</sup> <a name="source" id="pde.Home.addExecutable.parameter.source"></a>

- *Type:* string

---

###### `target`<sup>Required</sup> <a name="target" id="pde.Home.addExecutable.parameter.target"></a>

- *Type:* string

---

##### `addLocation` <a name="addLocation" id="pde.Home.addLocation"></a>

```typescript
public addLocation(scope: Construct, source: string, target: string): void
```

Add a file or directory to a place within home.

###### `scope`<sup>Required</sup> <a name="scope" id="pde.Home.addLocation.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `source`<sup>Required</sup> <a name="source" id="pde.Home.addLocation.parameter.source"></a>

- *Type:* string

---

###### `target`<sup>Required</sup> <a name="target" id="pde.Home.addLocation.parameter.target"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Home.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="pde.Home.isConstruct"></a>

```typescript
import { Home } from 'pde'

Home.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.Home.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Home.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.Home.property.binLocation">binLocation</a></code> | <code>string</code> | The location where executables live. |
| <code><a href="#pde.Home.property.homeLocation">homeLocation</a></code> | <code>string</code> | The users home directory. |
| <code><a href="#pde.Home.property.homeVar">homeVar</a></code> | <code>string</code> | The environment variable that holds the path to the users home directory This should be used to represent the home directory in any git tracked files. |
| <code><a href="#pde.Home.property.xdgConfigHome">xdgConfigHome</a></code> | <code>string</code> | The XDG_CONFIG_HOME location. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.Home.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `binLocation`<sup>Required</sup> <a name="binLocation" id="pde.Home.property.binLocation"></a>

```typescript
public readonly binLocation: string;
```

- *Type:* string

The location where executables live.

---

##### `homeLocation`<sup>Required</sup> <a name="homeLocation" id="pde.Home.property.homeLocation"></a>

```typescript
public readonly homeLocation: string;
```

- *Type:* string

The users home directory.

Defaults to $HOME

---

##### `homeVar`<sup>Required</sup> <a name="homeVar" id="pde.Home.property.homeVar"></a>

```typescript
public readonly homeVar: string;
```

- *Type:* string

The environment variable that holds the path to the users home directory This should be used to represent the home directory in any git tracked files.

---

##### `xdgConfigHome`<sup>Required</sup> <a name="xdgConfigHome" id="pde.Home.property.xdgConfigHome"></a>

```typescript
public readonly xdgConfigHome: string;
```

- *Type:* string

The XDG_CONFIG_HOME location.

---


### Installer <a name="Installer" id="pde.Installer"></a>

#### Initializers <a name="Initializers" id="pde.Installer.Initializer"></a>

```typescript
import { Installer } from 'pde'

new Installer(scope: Construct, id: string, props: InstallerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Installer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.Installer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.Installer.Initializer.parameter.props">props</a></code> | <code><a href="#pde.InstallerProps">InstallerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.Installer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.Installer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="pde.Installer.Initializer.parameter.props"></a>

- *Type:* <a href="#pde.InstallerProps">InstallerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Installer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.Installer.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.Installer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.Installer.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.Installer.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.Installer.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.Installer.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.Installer.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.Installer.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.Installer.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.Installer.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.Installer.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.Installer.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.Installer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.Installer.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.Installer.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.Installer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.Installer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.Installer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.Installer.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.Installer.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.Installer.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.Installer.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.Installer.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.Installer.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.Installer.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.Installer.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.Installer.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.Installer.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.Installer.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.Installer.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.Installer.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.Installer.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.Installer.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Installer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.Installer.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.Installer.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.Installer.isConstruct"></a>

```typescript
import { Installer } from 'pde'

Installer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.Installer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.Installer.isStack"></a>

```typescript
import { Installer } from 'pde'

Installer.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.Installer.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.Installer.of"></a>

```typescript
import { Installer } from 'pde'

Installer.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.Installer.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Installer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.Installer.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.Installer.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.Installer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.Installer.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.Installer.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---


### LocalFile <a name="LocalFile" id="pde.LocalFile"></a>

#### Initializers <a name="Initializers" id="pde.LocalFile.Initializer"></a>

```typescript
import { LocalFile } from 'pde'

new LocalFile(scope: Construct, id: string, props: LocalFileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.LocalFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.LocalFile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.LocalFile.Initializer.parameter.props">props</a></code> | <code><a href="#pde.LocalFileProps">LocalFileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.LocalFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.LocalFile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="pde.LocalFile.Initializer.parameter.props"></a>

- *Type:* <a href="#pde.LocalFileProps">LocalFileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.LocalFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.LocalFile.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.LocalFile.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.addLine">addLine</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.LocalFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.LocalFile.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.LocalFile.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.LocalFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.LocalFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.LocalFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.LocalFile.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.LocalFile.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.LocalFile.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.LocalFile.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.LocalFile.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.LocalFile.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.LocalFile.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.LocalFile.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.LocalFile.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.LocalFile.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.LocalFile.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.LocalFile.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.LocalFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addLine` <a name="addLine" id="pde.LocalFile.addLine"></a>

```typescript
public addLine(line: string): void
```

###### `line`<sup>Required</sup> <a name="line" id="pde.LocalFile.addLine.parameter.line"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.LocalFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.LocalFile.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.LocalFile.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.LocalFile.isConstruct"></a>

```typescript
import { LocalFile } from 'pde'

LocalFile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.LocalFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.LocalFile.isStack"></a>

```typescript
import { LocalFile } from 'pde'

LocalFile.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.LocalFile.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.LocalFile.of"></a>

```typescript
import { LocalFile } from 'pde'

LocalFile.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.LocalFile.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.LocalFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.LocalFile.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.LocalFile.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.LocalFile.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.LocalFile.property.resource">resource</a></code> | <code>@cdktf/provider-local.file.File</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.LocalFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.LocalFile.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.LocalFile.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `path`<sup>Required</sup> <a name="path" id="pde.LocalFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="pde.LocalFile.property.resource"></a>

```typescript
public readonly resource: File;
```

- *Type:* @cdktf/provider-local.file.File

---


### MavenInstaller <a name="MavenInstaller" id="pde.MavenInstaller"></a>

#### Initializers <a name="Initializers" id="pde.MavenInstaller.Initializer"></a>

```typescript
import { MavenInstaller } from 'pde'

new MavenInstaller(scope: Construct, id: string, options: MavenInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.MavenInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.MavenInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.MavenInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.MavenInstallerOptions">MavenInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.MavenInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.MavenInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.MavenInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.MavenInstallerOptions">MavenInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.MavenInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.MavenInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.MavenInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.MavenInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.MavenInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.MavenInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.MavenInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.MavenInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.MavenInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.MavenInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.MavenInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.MavenInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.MavenInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.MavenInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.MavenInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.MavenInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.MavenInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.MavenInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.MavenInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.MavenInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.MavenInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.MavenInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.MavenInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.MavenInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.MavenInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.MavenInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.MavenInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.MavenInstaller.isConstruct"></a>

```typescript
import { MavenInstaller } from 'pde'

MavenInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.MavenInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.MavenInstaller.isStack"></a>

```typescript
import { MavenInstaller } from 'pde'

MavenInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.MavenInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.MavenInstaller.of"></a>

```typescript
import { MavenInstaller } from 'pde'

MavenInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.MavenInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.MavenInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.MavenInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.MavenInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.MavenInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.MavenInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.MavenInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.MavenInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `name`<sup>Required</sup> <a name="name" id="pde.MavenInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### NpmGlobalInstaller <a name="NpmGlobalInstaller" id="pde.NpmGlobalInstaller"></a>

#### Initializers <a name="Initializers" id="pde.NpmGlobalInstaller.Initializer"></a>

```typescript
import { NpmGlobalInstaller } from 'pde'

new NpmGlobalInstaller(scope: Construct, id: string, options: NpmGlobalInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.NpmGlobalInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.NpmGlobalInstallerOptions">NpmGlobalInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.NpmGlobalInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.NpmGlobalInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.NpmGlobalInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.NpmGlobalInstallerOptions">NpmGlobalInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.NpmGlobalInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.NpmGlobalInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.NpmGlobalInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.NpmGlobalInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.NpmGlobalInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.NpmGlobalInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.NpmGlobalInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.NpmGlobalInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.NpmGlobalInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.NpmGlobalInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.NpmGlobalInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.NpmGlobalInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.NpmGlobalInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.NpmGlobalInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.NpmGlobalInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.NpmGlobalInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.NpmGlobalInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.NpmGlobalInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.NpmGlobalInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.NpmGlobalInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.NpmGlobalInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.NpmGlobalInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.NpmGlobalInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.NpmGlobalInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.NpmGlobalInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.NpmGlobalInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.NpmGlobalInstaller.isConstruct"></a>

```typescript
import { NpmGlobalInstaller } from 'pde'

NpmGlobalInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.NpmGlobalInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.NpmGlobalInstaller.isStack"></a>

```typescript
import { NpmGlobalInstaller } from 'pde'

NpmGlobalInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.NpmGlobalInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.NpmGlobalInstaller.of"></a>

```typescript
import { NpmGlobalInstaller } from 'pde'

NpmGlobalInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.NpmGlobalInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.NpmGlobalInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.NpmGlobalInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.NpmGlobalInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.NpmGlobalInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.NpmGlobalInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.NpmGlobalInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `name`<sup>Required</sup> <a name="name" id="pde.NpmGlobalInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### NvmInstaller <a name="NvmInstaller" id="pde.NvmInstaller"></a>

#### Initializers <a name="Initializers" id="pde.NvmInstaller.Initializer"></a>

```typescript
import { NvmInstaller } from 'pde'

new NvmInstaller(scope: Construct, id: string, _options?: NvmInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.NvmInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.NvmInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.NvmInstaller.Initializer.parameter._options">_options</a></code> | <code><a href="#pde.NvmInstallerOptions">NvmInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.NvmInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.NvmInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `_options`<sup>Optional</sup> <a name="_options" id="pde.NvmInstaller.Initializer.parameter._options"></a>

- *Type:* <a href="#pde.NvmInstallerOptions">NvmInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.NvmInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.NvmInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.NvmInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.NvmInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.NvmInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.NvmInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.NvmInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.NvmInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.NvmInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.NvmInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.NvmInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.NvmInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.NvmInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.NvmInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.NvmInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.NvmInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.NvmInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.NvmInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.NvmInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.NvmInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.NvmInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.NvmInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.NvmInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.NvmInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.NvmInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.NvmInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.NvmInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.NvmInstaller.isConstruct"></a>

```typescript
import { NvmInstaller } from 'pde'

NvmInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.NvmInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.NvmInstaller.isStack"></a>

```typescript
import { NvmInstaller } from 'pde'

NvmInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.NvmInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.NvmInstaller.of"></a>

```typescript
import { NvmInstaller } from 'pde'

NvmInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.NvmInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.NvmInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.NvmInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.NvmInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.NvmInstaller.property.absolutePathVar">absolutePathVar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.NvmInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.NvmInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.NvmInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.NvmInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `absolutePathVar`<sup>Required</sup> <a name="absolutePathVar" id="pde.NvmInstaller.property.absolutePathVar"></a>

```typescript
public readonly absolutePathVar: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="pde.NvmInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### Profile <a name="Profile" id="pde.Profile"></a>

- *Implements:* <a href="#pde.IProfile">IProfile</a>

#### Initializers <a name="Initializers" id="pde.Profile.Initializer"></a>

```typescript
import { Profile } from 'pde'

new Profile(scope: Construct, id: string, options: ProfilesOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Profile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.Profile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.Profile.Initializer.parameter.options">options</a></code> | <code><a href="#pde.ProfilesOptions">ProfilesOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.Profile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.Profile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.Profile.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.ProfilesOptions">ProfilesOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Profile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.Profile.addLines">addLines</a></code> | Add additional lines to the system profile. |
| <code><a href="#pde.Profile.addToEnv">addToEnv</a></code> | Add additional environment variables. |
| <code><a href="#pde.Profile.addToSystemPath">addToSystemPath</a></code> | Add additional paths to the system PATH. |

---

##### `toString` <a name="toString" id="pde.Profile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLines` <a name="addLines" id="pde.Profile.addLines"></a>

```typescript
public addLines(lines: string[]): void
```

Add additional lines to the system profile.

###### `lines`<sup>Required</sup> <a name="lines" id="pde.Profile.addLines.parameter.lines"></a>

- *Type:* string[]

---

##### `addToEnv` <a name="addToEnv" id="pde.Profile.addToEnv"></a>

```typescript
public addToEnv(name: string, value: string): void
```

Add additional environment variables.

###### `name`<sup>Required</sup> <a name="name" id="pde.Profile.addToEnv.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.Profile.addToEnv.parameter.value"></a>

- *Type:* string

---

##### `addToSystemPath` <a name="addToSystemPath" id="pde.Profile.addToSystemPath"></a>

```typescript
public addToSystemPath(systemPath: string): void
```

Add additional paths to the system PATH.

###### `systemPath`<sup>Required</sup> <a name="systemPath" id="pde.Profile.addToSystemPath.parameter.systemPath"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Profile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="pde.Profile.isConstruct"></a>

```typescript
import { Profile } from 'pde'

Profile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.Profile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Profile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.Profile.property.profileFileName">profileFileName</a></code> | <code>string</code> | The name of the profile file. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.Profile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.Profile.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The name of the profile file.

e.g. .zshrc, .bashrc, etc

---


### ProfileBase <a name="ProfileBase" id="pde.ProfileBase"></a>

- *Implements:* <a href="#pde.IProfileBase">IProfileBase</a>

#### Initializers <a name="Initializers" id="pde.ProfileBase.Initializer"></a>

```typescript
import { ProfileBase } from 'pde'

new ProfileBase(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ProfileBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.ProfileBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.ProfileBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.ProfileBase.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ProfileBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.ProfileBase.addLines">addLines</a></code> | Add additional lines to the system profile. |
| <code><a href="#pde.ProfileBase.addToEnv">addToEnv</a></code> | Add additional environment variables. |
| <code><a href="#pde.ProfileBase.addToSystemPath">addToSystemPath</a></code> | Add additional paths to the system PATH. |

---

##### `toString` <a name="toString" id="pde.ProfileBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLines` <a name="addLines" id="pde.ProfileBase.addLines"></a>

```typescript
public addLines(lines: string[]): void
```

Add additional lines to the system profile.

###### `lines`<sup>Required</sup> <a name="lines" id="pde.ProfileBase.addLines.parameter.lines"></a>

- *Type:* string[]

---

##### `addToEnv` <a name="addToEnv" id="pde.ProfileBase.addToEnv"></a>

```typescript
public addToEnv(name: string, value: string): void
```

Add additional environment variables.

###### `name`<sup>Required</sup> <a name="name" id="pde.ProfileBase.addToEnv.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.ProfileBase.addToEnv.parameter.value"></a>

- *Type:* string

---

##### `addToSystemPath` <a name="addToSystemPath" id="pde.ProfileBase.addToSystemPath"></a>

```typescript
public addToSystemPath(systemPath: string): void
```

Add additional paths to the system PATH.

###### `systemPath`<sup>Required</sup> <a name="systemPath" id="pde.ProfileBase.addToSystemPath.parameter.systemPath"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ProfileBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="pde.ProfileBase.isConstruct"></a>

```typescript
import { ProfileBase } from 'pde'

ProfileBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.ProfileBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ProfileBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.ProfileBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Project <a name="Project" id="pde.Project"></a>

#### Initializers <a name="Initializers" id="pde.Project.Initializer"></a>

```typescript
import { Project } from 'pde'

new Project(props?: ProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Project.Initializer.parameter.props">props</a></code> | <code><a href="#pde.ProjectProps">ProjectProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="pde.Project.Initializer.parameter.props"></a>

- *Type:* <a href="#pde.ProjectProps">ProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.Project.crossStackReference">crossStackReference</a></code> | Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources. |
| <code><a href="#pde.Project.synth">synth</a></code> | Synthesizes all resources to the output directory. |

---

##### `toString` <a name="toString" id="pde.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `crossStackReference` <a name="crossStackReference" id="pde.Project.crossStackReference"></a>

```typescript
public crossStackReference(fromStack: TerraformStack, toStack: TerraformStack, identifier: string): string
```

Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources.

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.Project.crossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

###### `toStack`<sup>Required</sup> <a name="toStack" id="pde.Project.crossStackReference.parameter.toStack"></a>

- *Type:* cdktf.TerraformStack

---

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.Project.crossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `synth` <a name="synth" id="pde.Project.synth"></a>

```typescript
public synth(): void
```

Synthesizes all resources to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.Project.isApp">isApp</a></code> | *No description.* |
| <code><a href="#pde.Project.of">of</a></code> | *No description.* |
| <code><a href="#pde.Project.isProject">isProject</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#pde.Project.ofProject">ofProject</a></code> | Finds a Project construct in the given scope. |

---

##### `isConstruct` <a name="isConstruct" id="pde.Project.isConstruct"></a>

```typescript
import { Project } from 'pde'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isApp` <a name="isApp" id="pde.Project.isApp"></a>

```typescript
import { Project } from 'pde'

Project.isApp(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.Project.isApp.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.Project.of"></a>

```typescript
import { Project } from 'pde'

Project.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.Project.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isProject` <a name="isProject" id="pde.Project.isProject"></a>

```typescript
import { Project } from 'pde'

Project.isProject(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="pde.Project.isProject.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `ofProject` <a name="ofProject" id="pde.Project.ofProject"></a>

```typescript
import { Project } from 'pde'

Project.ofProject(construct: IConstruct)
```

Finds a Project construct in the given scope.

###### `construct`<sup>Required</sup> <a name="construct" id="pde.Project.ofProject.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.Project.property.manifest">manifest</a></code> | <code>cdktf.Manifest</code> | *No description.* |
| <code><a href="#pde.Project.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which resources will be synthesized. |
| <code><a href="#pde.Project.property.skipValidation">skipValidation</a></code> | <code>boolean</code> | Whether to skip the validation during synthesis of the app. |
| <code><a href="#pde.Project.property.targetStackId">targetStackId</a></code> | <code>string</code> | The stack which will be synthesized. |
| <code><a href="#pde.Project.property.dir">dir</a></code> | <code>string</code> | The absolute directory of the project. |
| <code><a href="#pde.Project.property.home">home</a></code> | <code><a href="#pde.IHome">IHome</a></code> | *No description.* |
| <code><a href="#pde.Project.property.name">name</a></code> | <code>string</code> | The name of the project. |
| <code><a href="#pde.Project.property.platform">platform</a></code> | <code><a href="#pde.Platform">Platform</a></code> | The platform for this machine. |
| <code><a href="#pde.Project.property.profile">profile</a></code> | <code><a href="#pde.ISystemProfile">ISystemProfile</a></code> | *No description.* |
| <code><a href="#pde.Project.property.systemTmpDir">systemTmpDir</a></code> | <code>string</code> | The absolute path to the systems tmp directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="pde.Project.property.manifest"></a>

```typescript
public readonly manifest: Manifest;
```

- *Type:* cdktf.Manifest

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="pde.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory into which resources will be synthesized.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="pde.Project.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean;
```

- *Type:* boolean

Whether to skip the validation during synthesis of the app.

---

##### `targetStackId`<sup>Optional</sup> <a name="targetStackId" id="pde.Project.property.targetStackId"></a>

```typescript
public readonly targetStackId: string;
```

- *Type:* string

The stack which will be synthesized.

If not set, all stacks will be synthesized.

---

##### `dir`<sup>Required</sup> <a name="dir" id="pde.Project.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

The absolute directory of the project.

---

##### `home`<sup>Required</sup> <a name="home" id="pde.Project.property.home"></a>

```typescript
public readonly home: IHome;
```

- *Type:* <a href="#pde.IHome">IHome</a>

---

##### `name`<sup>Required</sup> <a name="name" id="pde.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the project.

This will be the name of the synthesized
directory

---

##### `platform`<sup>Required</sup> <a name="platform" id="pde.Project.property.platform"></a>

```typescript
public readonly platform: Platform;
```

- *Type:* <a href="#pde.Platform">Platform</a>

The platform for this machine.

---

##### `profile`<sup>Required</sup> <a name="profile" id="pde.Project.property.profile"></a>

```typescript
public readonly profile: ISystemProfile;
```

- *Type:* <a href="#pde.ISystemProfile">ISystemProfile</a>

---

##### `systemTmpDir`<sup>Required</sup> <a name="systemTmpDir" id="pde.Project.property.systemTmpDir"></a>

```typescript
public readonly systemTmpDir: string;
```

- *Type:* string

The absolute path to the systems tmp directory.

For example on linux this will be /tmp

---


### PythonGlobalInstaller <a name="PythonGlobalInstaller" id="pde.PythonGlobalInstaller"></a>

#### Initializers <a name="Initializers" id="pde.PythonGlobalInstaller.Initializer"></a>

```typescript
import { PythonGlobalInstaller } from 'pde'

new PythonGlobalInstaller(scope: Construct, id: string, options: PythonGlobalInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.PythonGlobalInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.PythonGlobalInstallerOptions">PythonGlobalInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.PythonGlobalInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.PythonGlobalInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.PythonGlobalInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.PythonGlobalInstallerOptions">PythonGlobalInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.PythonGlobalInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.PythonGlobalInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.PythonGlobalInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.PythonGlobalInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.PythonGlobalInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.PythonGlobalInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.PythonGlobalInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.PythonGlobalInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.PythonGlobalInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.PythonGlobalInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.PythonGlobalInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.PythonGlobalInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.PythonGlobalInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.PythonGlobalInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.PythonGlobalInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.PythonGlobalInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.PythonGlobalInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.PythonGlobalInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.PythonGlobalInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.PythonGlobalInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.PythonGlobalInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.PythonGlobalInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.PythonGlobalInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.PythonGlobalInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.PythonGlobalInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.PythonGlobalInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.PythonGlobalInstaller.isConstruct"></a>

```typescript
import { PythonGlobalInstaller } from 'pde'

PythonGlobalInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.PythonGlobalInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.PythonGlobalInstaller.isStack"></a>

```typescript
import { PythonGlobalInstaller } from 'pde'

PythonGlobalInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.PythonGlobalInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.PythonGlobalInstaller.of"></a>

```typescript
import { PythonGlobalInstaller } from 'pde'

PythonGlobalInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.PythonGlobalInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.PythonGlobalInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.PythonGlobalInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.PythonGlobalInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.PythonGlobalInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.PythonGlobalInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `name`<sup>Required</sup> <a name="name" id="pde.PythonGlobalInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### ShellInstaller <a name="ShellInstaller" id="pde.ShellInstaller"></a>

#### Initializers <a name="Initializers" id="pde.ShellInstaller.Initializer"></a>

```typescript
import { ShellInstaller } from 'pde'

new ShellInstaller(scope: Construct, id: string, options: UrlInstallerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ShellInstaller.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.ShellInstaller.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.ShellInstaller.Initializer.parameter.options">options</a></code> | <code><a href="#pde.UrlInstallerOptions">UrlInstallerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.ShellInstaller.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.ShellInstaller.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.ShellInstaller.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.UrlInstallerOptions">UrlInstallerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ShellInstaller.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.ShellInstaller.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#pde.ShellInstaller.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.addDependsOn">addDependsOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.ShellInstaller.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="pde.ShellInstaller.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="pde.ShellInstaller.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="pde.ShellInstaller.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="pde.ShellInstaller.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.ShellInstaller.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="pde.ShellInstaller.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="pde.ShellInstaller.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="pde.ShellInstaller.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="pde.ShellInstaller.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="pde.ShellInstaller.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="pde.ShellInstaller.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="pde.ShellInstaller.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="pde.ShellInstaller.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="pde.ShellInstaller.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="pde.ShellInstaller.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="pde.ShellInstaller.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="pde.ShellInstaller.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="pde.ShellInstaller.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addDependsOn` <a name="addDependsOn" id="pde.ShellInstaller.addDependsOn"></a>

```typescript
public addDependsOn(resource: TerraformResource): void
```

###### `resource`<sup>Required</sup> <a name="resource" id="pde.ShellInstaller.addDependsOn.parameter.resource"></a>

- *Type:* cdktf.TerraformResource

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ShellInstaller.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.ShellInstaller.isStack">isStack</a></code> | *No description.* |
| <code><a href="#pde.ShellInstaller.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="pde.ShellInstaller.isConstruct"></a>

```typescript
import { ShellInstaller } from 'pde'

ShellInstaller.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.ShellInstaller.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="pde.ShellInstaller.isStack"></a>

```typescript
import { ShellInstaller } from 'pde'

ShellInstaller.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="pde.ShellInstaller.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="pde.ShellInstaller.of"></a>

```typescript
import { ShellInstaller } from 'pde'

ShellInstaller.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="pde.ShellInstaller.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ShellInstaller.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.ShellInstaller.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#pde.ShellInstaller.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#pde.ShellInstaller.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.ShellInstaller.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="pde.ShellInstaller.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="pde.ShellInstaller.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `name`<sup>Required</sup> <a name="name" id="pde.ShellInstaller.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### SystemProfile <a name="SystemProfile" id="pde.SystemProfile"></a>

- *Implements:* <a href="#pde.ISystemProfile">ISystemProfile</a>

#### Initializers <a name="Initializers" id="pde.SystemProfile.Initializer"></a>

```typescript
import { SystemProfile } from 'pde'

new SystemProfile(scope: Construct, id: string, options: SystemProfileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.SystemProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.SystemProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.SystemProfile.Initializer.parameter.options">options</a></code> | <code><a href="#pde.SystemProfileOptions">SystemProfileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.SystemProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.SystemProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.SystemProfile.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.SystemProfileOptions">SystemProfileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.SystemProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.SystemProfile.addLines">addLines</a></code> | Add additional lines to the system profile. |
| <code><a href="#pde.SystemProfile.addToEnv">addToEnv</a></code> | Add additional environment variables. |
| <code><a href="#pde.SystemProfile.addToSystemPath">addToSystemPath</a></code> | Add additional paths to the system PATH. |
| <code><a href="#pde.SystemProfile.register">register</a></code> | TODO: docs. |

---

##### `toString` <a name="toString" id="pde.SystemProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLines` <a name="addLines" id="pde.SystemProfile.addLines"></a>

```typescript
public addLines(lines: string[]): void
```

Add additional lines to the system profile.

###### `lines`<sup>Required</sup> <a name="lines" id="pde.SystemProfile.addLines.parameter.lines"></a>

- *Type:* string[]

---

##### `addToEnv` <a name="addToEnv" id="pde.SystemProfile.addToEnv"></a>

```typescript
public addToEnv(name: string, value: string): void
```

Add additional environment variables.

###### `name`<sup>Required</sup> <a name="name" id="pde.SystemProfile.addToEnv.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.SystemProfile.addToEnv.parameter.value"></a>

- *Type:* string

---

##### `addToSystemPath` <a name="addToSystemPath" id="pde.SystemProfile.addToSystemPath"></a>

```typescript
public addToSystemPath(systemPath: string): void
```

Add additional paths to the system PATH.

###### `systemPath`<sup>Required</sup> <a name="systemPath" id="pde.SystemProfile.addToSystemPath.parameter.systemPath"></a>

- *Type:* string

---

##### `register` <a name="register" id="pde.SystemProfile.register"></a>

```typescript
public register(profile: IProfile): void
```

TODO: docs.

###### `profile`<sup>Required</sup> <a name="profile" id="pde.SystemProfile.register.parameter.profile"></a>

- *Type:* <a href="#pde.IProfile">IProfile</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.SystemProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#pde.SystemProfile.isSystemProfile">isSystemProfile</a></code> | Check whether the given construct is a Profile. |
| <code><a href="#pde.SystemProfile.of">of</a></code> | Finds a Profile construct in the given scope. |

---

##### `isConstruct` <a name="isConstruct" id="pde.SystemProfile.isConstruct"></a>

```typescript
import { SystemProfile } from 'pde'

SystemProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.SystemProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isSystemProfile` <a name="isSystemProfile" id="pde.SystemProfile.isSystemProfile"></a>

```typescript
import { SystemProfile } from 'pde'

SystemProfile.isSystemProfile(construct: IConstruct)
```

Check whether the given construct is a Profile.

###### `construct`<sup>Required</sup> <a name="construct" id="pde.SystemProfile.isSystemProfile.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `of` <a name="of" id="pde.SystemProfile.of"></a>

```typescript
import { SystemProfile } from 'pde'

SystemProfile.of(construct: IConstruct)
```

Finds a Profile construct in the given scope.

###### `construct`<sup>Required</sup> <a name="construct" id="pde.SystemProfile.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.SystemProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.SystemProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ZshProfile <a name="ZshProfile" id="pde.ZshProfile"></a>

- *Implements:* <a href="#pde.IZshProfile">IZshProfile</a>

#### Initializers <a name="Initializers" id="pde.ZshProfile.Initializer"></a>

```typescript
import { ZshProfile } from 'pde'

new ZshProfile(scope: Construct, id: string, options: ZshProfileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ZshProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#pde.ZshProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.ZshProfile.Initializer.parameter.options">options</a></code> | <code><a href="#pde.ZshProfileOptions">ZshProfileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="pde.ZshProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="pde.ZshProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="pde.ZshProfile.Initializer.parameter.options"></a>

- *Type:* <a href="#pde.ZshProfileOptions">ZshProfileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ZshProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#pde.ZshProfile.addLines">addLines</a></code> | Add additional lines to the system profile. |
| <code><a href="#pde.ZshProfile.addToEnv">addToEnv</a></code> | Add additional environment variables. |
| <code><a href="#pde.ZshProfile.addToSystemPath">addToSystemPath</a></code> | Add additional paths to the system PATH. |
| <code><a href="#pde.ZshProfile.addAlias">addAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="pde.ZshProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLines` <a name="addLines" id="pde.ZshProfile.addLines"></a>

```typescript
public addLines(lines: string[]): void
```

Add additional lines to the system profile.

###### `lines`<sup>Required</sup> <a name="lines" id="pde.ZshProfile.addLines.parameter.lines"></a>

- *Type:* string[]

---

##### `addToEnv` <a name="addToEnv" id="pde.ZshProfile.addToEnv"></a>

```typescript
public addToEnv(name: string, value: string): void
```

Add additional environment variables.

###### `name`<sup>Required</sup> <a name="name" id="pde.ZshProfile.addToEnv.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.ZshProfile.addToEnv.parameter.value"></a>

- *Type:* string

---

##### `addToSystemPath` <a name="addToSystemPath" id="pde.ZshProfile.addToSystemPath"></a>

```typescript
public addToSystemPath(systemPath: string): void
```

Add additional paths to the system PATH.

###### `systemPath`<sup>Required</sup> <a name="systemPath" id="pde.ZshProfile.addToSystemPath.parameter.systemPath"></a>

- *Type:* string

---

##### `addAlias` <a name="addAlias" id="pde.ZshProfile.addAlias"></a>

```typescript
public addAlias(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="pde.ZshProfile.addAlias.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="pde.ZshProfile.addAlias.parameter.command"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ZshProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="pde.ZshProfile.isConstruct"></a>

```typescript
import { ZshProfile } from 'pde'

ZshProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="pde.ZshProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ZshProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.ZshProfile.property.profileFileName">profileFileName</a></code> | <code>string</code> | The name of the profile file. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.ZshProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.ZshProfile.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The name of the profile file.

e.g. .zshrc, .bashrc, etc

---


## Structs <a name="Structs" id="Structs"></a>

### AwsCliInstallerOptions <a name="AwsCliInstallerOptions" id="pde.AwsCliInstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.AwsCliInstallerOptions.Initializer"></a>

```typescript
import { AwsCliInstallerOptions } from 'pde'

const awsCliInstallerOptions: AwsCliInstallerOptions = { ... }
```


### BashProfileOptions <a name="BashProfileOptions" id="pde.BashProfileOptions"></a>

#### Initializer <a name="Initializer" id="pde.BashProfileOptions.Initializer"></a>

```typescript
import { BashProfileOptions } from 'pde'

const bashProfileOptions: BashProfileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.BashProfileOptions.property.name">name</a></code> | <code>string</code> | The name of the profile. |
| <code><a href="#pde.BashProfileOptions.property.profileFileName">profileFileName</a></code> | <code>string</code> | The file name of the profile. |
| <code><a href="#pde.BashProfileOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | An initial set of environment variables to source. |

---

##### `name`<sup>Required</sup> <a name="name" id="pde.BashProfileOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the profile.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.BashProfileOptions.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The file name of the profile.

---

##### `env`<sup>Optional</sup> <a name="env" id="pde.BashProfileOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An initial set of environment variables to source.

---

### DotnetInstallerOptions <a name="DotnetInstallerOptions" id="pde.DotnetInstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.DotnetInstallerOptions.Initializer"></a>

```typescript
import { DotnetInstallerOptions } from 'pde'

const dotnetInstallerOptions: DotnetInstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.DotnetInstallerOptions.property.home">home</a></code> | <code><a href="#pde.IHome">IHome</a></code> | *No description.* |
| <code><a href="#pde.DotnetInstallerOptions.property.profile">profile</a></code> | <code><a href="#pde.ISystemProfile">ISystemProfile</a></code> | *No description.* |

---

##### `home`<sup>Required</sup> <a name="home" id="pde.DotnetInstallerOptions.property.home"></a>

```typescript
public readonly home: IHome;
```

- *Type:* <a href="#pde.IHome">IHome</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="pde.DotnetInstallerOptions.property.profile"></a>

```typescript
public readonly profile: ISystemProfile;
```

- *Type:* <a href="#pde.ISystemProfile">ISystemProfile</a>

---

### GitHubInstallerOptions <a name="GitHubInstallerOptions" id="pde.GitHubInstallerOptions"></a>

Common options for installing a component from a GitHub repo.

#### Initializer <a name="Initializer" id="pde.GitHubInstallerOptions.Initializer"></a>

```typescript
import { GitHubInstallerOptions } from 'pde'

const gitHubInstallerOptions: GitHubInstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubInstallerOptions.property.org">org</a></code> | <code>string</code> | The GitHub organization. |
| <code><a href="#pde.GitHubInstallerOptions.property.repo">repo</a></code> | <code>string</code> | The GitHub repo name. |
| <code><a href="#pde.GitHubInstallerOptions.property.installCommands">installCommands</a></code> | <code>string[]</code> | Any install commands that should be run after the component has been downloaded. |
| <code><a href="#pde.GitHubInstallerOptions.property.name">name</a></code> | <code>string</code> | This should be the name of the program that is being installed. |
| <code><a href="#pde.GitHubInstallerOptions.property.uninstallCommands">uninstallCommands</a></code> | <code>string[]</code> | Commands to run in order to delete the program. |
| <code><a href="#pde.GitHubInstallerOptions.property.updateCommands">updateCommands</a></code> | <code>string[]</code> | Any update commands that should be run after the component has been downloaded. |
| <code><a href="#pde.GitHubInstallerOptions.property.versionCommand">versionCommand</a></code> | <code>string</code> | TODO: docs. |

---

##### `org`<sup>Required</sup> <a name="org" id="pde.GitHubInstallerOptions.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

The GitHub organization.

---

##### `repo`<sup>Required</sup> <a name="repo" id="pde.GitHubInstallerOptions.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

The GitHub repo name.

---

##### `installCommands`<sup>Optional</sup> <a name="installCommands" id="pde.GitHubInstallerOptions.property.installCommands"></a>

```typescript
public readonly installCommands: string[];
```

- *Type:* string[]
- *Default:* no install commands are run after downloading

Any install commands that should be run after the component has been downloaded.

---

##### `name`<sup>Optional</sup> <a name="name" id="pde.GitHubInstallerOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* repo

This should be the name of the program that is being installed.

---

##### `uninstallCommands`<sup>Optional</sup> <a name="uninstallCommands" id="pde.GitHubInstallerOptions.property.uninstallCommands"></a>

```typescript
public readonly uninstallCommands: string[];
```

- *Type:* string[]

Commands to run in order to delete the program.

---

##### `updateCommands`<sup>Optional</sup> <a name="updateCommands" id="pde.GitHubInstallerOptions.property.updateCommands"></a>

```typescript
public readonly updateCommands: string[];
```

- *Type:* string[]
- *Default:* no update commands are run after downloading

Any update commands that should be run after the component has been downloaded.

---

##### `versionCommand`<sup>Optional</sup> <a name="versionCommand" id="pde.GitHubInstallerOptions.property.versionCommand"></a>

```typescript
public readonly versionCommand: string;
```

- *Type:* string
- *Default:* TODO

TODO: docs.

---

### GitHubReleaseOptions <a name="GitHubReleaseOptions" id="pde.GitHubReleaseOptions"></a>

Options for installing a component from a GitHub release.

#### Initializer <a name="Initializer" id="pde.GitHubReleaseOptions.Initializer"></a>

```typescript
import { GitHubReleaseOptions } from 'pde'

const gitHubReleaseOptions: GitHubReleaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubReleaseOptions.property.org">org</a></code> | <code>string</code> | The GitHub organization. |
| <code><a href="#pde.GitHubReleaseOptions.property.repo">repo</a></code> | <code>string</code> | The GitHub repo name. |
| <code><a href="#pde.GitHubReleaseOptions.property.installCommands">installCommands</a></code> | <code>string[]</code> | Any install commands that should be run after the component has been downloaded. |
| <code><a href="#pde.GitHubReleaseOptions.property.name">name</a></code> | <code>string</code> | This should be the name of the program that is being installed. |
| <code><a href="#pde.GitHubReleaseOptions.property.uninstallCommands">uninstallCommands</a></code> | <code>string[]</code> | Commands to run in order to delete the program. |
| <code><a href="#pde.GitHubReleaseOptions.property.updateCommands">updateCommands</a></code> | <code>string[]</code> | Any update commands that should be run after the component has been downloaded. |
| <code><a href="#pde.GitHubReleaseOptions.property.versionCommand">versionCommand</a></code> | <code>string</code> | TODO: docs. |
| <code><a href="#pde.GitHubReleaseOptions.property.assetName">assetName</a></code> | <code>string</code> | The name of the asset that you want to install from the release. |
| <code><a href="#pde.GitHubReleaseOptions.property.version">version</a></code> | <code>string</code> | The GitHub release version, e.g. v8.4.0. |
| <code><a href="#pde.GitHubReleaseOptions.property.executable">executable</a></code> | <code>string</code> | If the downloaded asset is an executable, what name do you want to use for the executable. |

---

##### `org`<sup>Required</sup> <a name="org" id="pde.GitHubReleaseOptions.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

The GitHub organization.

---

##### `repo`<sup>Required</sup> <a name="repo" id="pde.GitHubReleaseOptions.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

The GitHub repo name.

---

##### `installCommands`<sup>Optional</sup> <a name="installCommands" id="pde.GitHubReleaseOptions.property.installCommands"></a>

```typescript
public readonly installCommands: string[];
```

- *Type:* string[]
- *Default:* no install commands are run after downloading

Any install commands that should be run after the component has been downloaded.

---

##### `name`<sup>Optional</sup> <a name="name" id="pde.GitHubReleaseOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* repo

This should be the name of the program that is being installed.

---

##### `uninstallCommands`<sup>Optional</sup> <a name="uninstallCommands" id="pde.GitHubReleaseOptions.property.uninstallCommands"></a>

```typescript
public readonly uninstallCommands: string[];
```

- *Type:* string[]

Commands to run in order to delete the program.

---

##### `updateCommands`<sup>Optional</sup> <a name="updateCommands" id="pde.GitHubReleaseOptions.property.updateCommands"></a>

```typescript
public readonly updateCommands: string[];
```

- *Type:* string[]
- *Default:* no update commands are run after downloading

Any update commands that should be run after the component has been downloaded.

---

##### `versionCommand`<sup>Optional</sup> <a name="versionCommand" id="pde.GitHubReleaseOptions.property.versionCommand"></a>

```typescript
public readonly versionCommand: string;
```

- *Type:* string
- *Default:* TODO

TODO: docs.

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="pde.GitHubReleaseOptions.property.assetName"></a>

```typescript
public readonly assetName: string;
```

- *Type:* string

The name of the asset that you want to install from the release.

e.g. fd_8.4.0_amd64.deb

---

##### `version`<sup>Required</sup> <a name="version" id="pde.GitHubReleaseOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The GitHub release version, e.g. v8.4.0.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="pde.GitHubReleaseOptions.property.executable"></a>

```typescript
public readonly executable: string;
```

- *Type:* string
- *Default:* not an executable

If the downloaded asset is an executable, what name do you want to use for the executable.

---

### GitHubRepoOptions <a name="GitHubRepoOptions" id="pde.GitHubRepoOptions"></a>

Options for installing a component from a GitHub repo.

#### Initializer <a name="Initializer" id="pde.GitHubRepoOptions.Initializer"></a>

```typescript
import { GitHubRepoOptions } from 'pde'

const gitHubRepoOptions: GitHubRepoOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.GitHubRepoOptions.property.org">org</a></code> | <code>string</code> | The GitHub organization. |
| <code><a href="#pde.GitHubRepoOptions.property.repo">repo</a></code> | <code>string</code> | The GitHub repo name. |
| <code><a href="#pde.GitHubRepoOptions.property.installCommands">installCommands</a></code> | <code>string[]</code> | Any install commands that should be run after the component has been downloaded. |
| <code><a href="#pde.GitHubRepoOptions.property.name">name</a></code> | <code>string</code> | This should be the name of the program that is being installed. |
| <code><a href="#pde.GitHubRepoOptions.property.uninstallCommands">uninstallCommands</a></code> | <code>string[]</code> | Commands to run in order to delete the program. |
| <code><a href="#pde.GitHubRepoOptions.property.updateCommands">updateCommands</a></code> | <code>string[]</code> | Any update commands that should be run after the component has been downloaded. |
| <code><a href="#pde.GitHubRepoOptions.property.versionCommand">versionCommand</a></code> | <code>string</code> | TODO: docs. |
| <code><a href="#pde.GitHubRepoOptions.property.addBin">addBin</a></code> | <code>boolean</code> | Whether the repo contains a 'bin' folder that should be added to the system bin. |
| <code><a href="#pde.GitHubRepoOptions.property.branch">branch</a></code> | <code>string</code> | The version to clone. |
| <code><a href="#pde.GitHubRepoOptions.property.folderName">folderName</a></code> | <code>string</code> | The name of the folder where the repo should be cloned to. |

---

##### `org`<sup>Required</sup> <a name="org" id="pde.GitHubRepoOptions.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

The GitHub organization.

---

##### `repo`<sup>Required</sup> <a name="repo" id="pde.GitHubRepoOptions.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

The GitHub repo name.

---

##### `installCommands`<sup>Optional</sup> <a name="installCommands" id="pde.GitHubRepoOptions.property.installCommands"></a>

```typescript
public readonly installCommands: string[];
```

- *Type:* string[]
- *Default:* no install commands are run after downloading

Any install commands that should be run after the component has been downloaded.

---

##### `name`<sup>Optional</sup> <a name="name" id="pde.GitHubRepoOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* repo

This should be the name of the program that is being installed.

---

##### `uninstallCommands`<sup>Optional</sup> <a name="uninstallCommands" id="pde.GitHubRepoOptions.property.uninstallCommands"></a>

```typescript
public readonly uninstallCommands: string[];
```

- *Type:* string[]

Commands to run in order to delete the program.

---

##### `updateCommands`<sup>Optional</sup> <a name="updateCommands" id="pde.GitHubRepoOptions.property.updateCommands"></a>

```typescript
public readonly updateCommands: string[];
```

- *Type:* string[]
- *Default:* no update commands are run after downloading

Any update commands that should be run after the component has been downloaded.

---

##### `versionCommand`<sup>Optional</sup> <a name="versionCommand" id="pde.GitHubRepoOptions.property.versionCommand"></a>

```typescript
public readonly versionCommand: string;
```

- *Type:* string
- *Default:* TODO

TODO: docs.

---

##### `addBin`<sup>Optional</sup> <a name="addBin" id="pde.GitHubRepoOptions.property.addBin"></a>

```typescript
public readonly addBin: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the repo contains a 'bin' folder that should be added to the system bin.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="pde.GitHubRepoOptions.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string
- *Default:* main

The version to clone.

---

##### `folderName`<sup>Optional</sup> <a name="folderName" id="pde.GitHubRepoOptions.property.folderName"></a>

```typescript
public readonly folderName: string;
```

- *Type:* string
- *Default:* the name of the repo

The name of the folder where the repo should be cloned to.

This will
be relative to the home directory.

---

### HomeOptions <a name="HomeOptions" id="pde.HomeOptions"></a>

Options for the home directory.

#### Initializer <a name="Initializer" id="pde.HomeOptions.Initializer"></a>

```typescript
import { HomeOptions } from 'pde'

const homeOptions: HomeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.HomeOptions.property.xdgConfigHome">xdgConfigHome</a></code> | <code>string</code> | The XDG_CONFIG_HOME location. |

---

##### `xdgConfigHome`<sup>Optional</sup> <a name="xdgConfigHome" id="pde.HomeOptions.property.xdgConfigHome"></a>

```typescript
public readonly xdgConfigHome: string;
```

- *Type:* string
- *Default:* '$HOME/.config'

The XDG_CONFIG_HOME location.

---

### InstallerOptions <a name="InstallerOptions" id="pde.InstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.InstallerOptions.Initializer"></a>

```typescript
import { InstallerOptions } from 'pde'

const installerOptions: InstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.InstallerOptions.property.installCommands">installCommands</a></code> | <code>string[]</code> | Any install commands that should be run after the component has been downloaded. |
| <code><a href="#pde.InstallerOptions.property.name">name</a></code> | <code>string</code> | This should be the name of the program that is being installed. |
| <code><a href="#pde.InstallerOptions.property.uninstallCommands">uninstallCommands</a></code> | <code>string[]</code> | Commands to run in order to delete the program. |
| <code><a href="#pde.InstallerOptions.property.updateCommands">updateCommands</a></code> | <code>string[]</code> | Any update commands that should be run after the component has been downloaded. |
| <code><a href="#pde.InstallerOptions.property.versionCommand">versionCommand</a></code> | <code>string</code> | TODO: docs. |

---

##### `installCommands`<sup>Required</sup> <a name="installCommands" id="pde.InstallerOptions.property.installCommands"></a>

```typescript
public readonly installCommands: string[];
```

- *Type:* string[]
- *Default:* no install commands are run after downloading

Any install commands that should be run after the component has been downloaded.

---

##### `name`<sup>Required</sup> <a name="name" id="pde.InstallerOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This should be the name of the program that is being installed.

---

##### `uninstallCommands`<sup>Required</sup> <a name="uninstallCommands" id="pde.InstallerOptions.property.uninstallCommands"></a>

```typescript
public readonly uninstallCommands: string[];
```

- *Type:* string[]

Commands to run in order to delete the program.

---

##### `updateCommands`<sup>Optional</sup> <a name="updateCommands" id="pde.InstallerOptions.property.updateCommands"></a>

```typescript
public readonly updateCommands: string[];
```

- *Type:* string[]
- *Default:* no update commands are run after downloading

Any update commands that should be run after the component has been downloaded.

---

##### `versionCommand`<sup>Optional</sup> <a name="versionCommand" id="pde.InstallerOptions.property.versionCommand"></a>

```typescript
public readonly versionCommand: string;
```

- *Type:* string
- *Default:* TODO

TODO: docs.

---

### InstallerProps <a name="InstallerProps" id="pde.InstallerProps"></a>

#### Initializer <a name="Initializer" id="pde.InstallerProps.Initializer"></a>

```typescript
import { InstallerProps } from 'pde'

const installerProps: InstallerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.InstallerProps.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.InstallerProps.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.InstallerProps.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.InstallerProps.property.update">update</a></code> | <code>string</code> | *No description.* |

---

##### `create`<sup>Required</sup> <a name="create" id="pde.InstallerProps.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="pde.InstallerProps.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Optional</sup> <a name="read" id="pde.InstallerProps.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Optional</sup> <a name="update" id="pde.InstallerProps.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

### LocalFileProps <a name="LocalFileProps" id="pde.LocalFileProps"></a>

#### Initializer <a name="Initializer" id="pde.LocalFileProps.Initializer"></a>

```typescript
import { LocalFileProps } from 'pde'

const localFileProps: LocalFileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.LocalFileProps.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.LocalFileProps.property.lines">lines</a></code> | <code>string[]</code> | *No description.* |

---

##### `filename`<sup>Required</sup> <a name="filename" id="pde.LocalFileProps.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `lines`<sup>Optional</sup> <a name="lines" id="pde.LocalFileProps.property.lines"></a>

```typescript
public readonly lines: string[];
```

- *Type:* string[]

---

### MavenInstallerOptions <a name="MavenInstallerOptions" id="pde.MavenInstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.MavenInstallerOptions.Initializer"></a>

```typescript
import { MavenInstallerOptions } from 'pde'

const mavenInstallerOptions: MavenInstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.MavenInstallerOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="pde.MavenInstallerOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### NpmGlobalInstallerOptions <a name="NpmGlobalInstallerOptions" id="pde.NpmGlobalInstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.NpmGlobalInstallerOptions.Initializer"></a>

```typescript
import { NpmGlobalInstallerOptions } from 'pde'

const npmGlobalInstallerOptions: NpmGlobalInstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.NpmGlobalInstallerOptions.property.npmPkgs">npmPkgs</a></code> | <code>string[]</code> | *No description.* |

---

##### `npmPkgs`<sup>Required</sup> <a name="npmPkgs" id="pde.NpmGlobalInstallerOptions.property.npmPkgs"></a>

```typescript
public readonly npmPkgs: string[];
```

- *Type:* string[]

---

### NvmInstallerOptions <a name="NvmInstallerOptions" id="pde.NvmInstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.NvmInstallerOptions.Initializer"></a>

```typescript
import { NvmInstallerOptions } from 'pde'

const nvmInstallerOptions: NvmInstallerOptions = { ... }
```


### ProfilesOptions <a name="ProfilesOptions" id="pde.ProfilesOptions"></a>

Options for creating a profile file.

#### Initializer <a name="Initializer" id="pde.ProfilesOptions.Initializer"></a>

```typescript
import { ProfilesOptions } from 'pde'

const profilesOptions: ProfilesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ProfilesOptions.property.name">name</a></code> | <code>string</code> | The name of the profile. |
| <code><a href="#pde.ProfilesOptions.property.profileFileName">profileFileName</a></code> | <code>string</code> | The file name of the profile. |
| <code><a href="#pde.ProfilesOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | An initial set of environment variables to source. |

---

##### `name`<sup>Required</sup> <a name="name" id="pde.ProfilesOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the profile.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.ProfilesOptions.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The file name of the profile.

---

##### `env`<sup>Optional</sup> <a name="env" id="pde.ProfilesOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An initial set of environment variables to source.

---

### ProjectProps <a name="ProjectProps" id="pde.ProjectProps"></a>

#### Initializer <a name="Initializer" id="pde.ProjectProps.Initializer"></a>

```typescript
import { ProjectProps } from 'pde'

const projectProps: ProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ProjectProps.property.name">name</a></code> | <code>string</code> | The name of the project. |
| <code><a href="#pde.ProjectProps.property.home">home</a></code> | <code><a href="#pde.IHome">IHome</a></code> | *No description.* |
| <code><a href="#pde.ProjectProps.property.profile">profile</a></code> | <code><a href="#pde.ISystemProfile">ISystemProfile</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="pde.ProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the project.

This will be the name of the synthesized
directory

---

##### `home`<sup>Optional</sup> <a name="home" id="pde.ProjectProps.property.home"></a>

```typescript
public readonly home: IHome;
```

- *Type:* <a href="#pde.IHome">IHome</a>

---

##### `profile`<sup>Optional</sup> <a name="profile" id="pde.ProjectProps.property.profile"></a>

```typescript
public readonly profile: ISystemProfile;
```

- *Type:* <a href="#pde.ISystemProfile">ISystemProfile</a>

---

### PythonGlobalInstallerOptions <a name="PythonGlobalInstallerOptions" id="pde.PythonGlobalInstallerOptions"></a>

#### Initializer <a name="Initializer" id="pde.PythonGlobalInstallerOptions.Initializer"></a>

```typescript
import { PythonGlobalInstallerOptions } from 'pde'

const pythonGlobalInstallerOptions: PythonGlobalInstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.PythonGlobalInstallerOptions.property.pythonPkgs">pythonPkgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#pde.PythonGlobalInstallerOptions.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |

---

##### `pythonPkgs`<sup>Required</sup> <a name="pythonPkgs" id="pde.PythonGlobalInstallerOptions.property.pythonPkgs"></a>

```typescript
public readonly pythonPkgs: string[];
```

- *Type:* string[]

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="pde.PythonGlobalInstallerOptions.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

### SystemProfileOptions <a name="SystemProfileOptions" id="pde.SystemProfileOptions"></a>

#### Initializer <a name="Initializer" id="pde.SystemProfileOptions.Initializer"></a>

```typescript
import { SystemProfileOptions } from 'pde'

const systemProfileOptions: SystemProfileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.SystemProfileOptions.property.home">home</a></code> | <code><a href="#pde.IHome">IHome</a></code> | *No description.* |
| <code><a href="#pde.SystemProfileOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | An initial set of environment variables to source. |

---

##### `home`<sup>Required</sup> <a name="home" id="pde.SystemProfileOptions.property.home"></a>

```typescript
public readonly home: IHome;
```

- *Type:* <a href="#pde.IHome">IHome</a>

---

##### `env`<sup>Optional</sup> <a name="env" id="pde.SystemProfileOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An initial set of environment variables to source.

---

### UrlInstallerOptions <a name="UrlInstallerOptions" id="pde.UrlInstallerOptions"></a>

Options for installing a component from a URL.

#### Initializer <a name="Initializer" id="pde.UrlInstallerOptions.Initializer"></a>

```typescript
import { UrlInstallerOptions } from 'pde'

const urlInstallerOptions: UrlInstallerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.UrlInstallerOptions.property.installCommands">installCommands</a></code> | <code>string[]</code> | Any install commands that should be run after the component has been downloaded. |
| <code><a href="#pde.UrlInstallerOptions.property.name">name</a></code> | <code>string</code> | This should be the name of the program that is being installed. |
| <code><a href="#pde.UrlInstallerOptions.property.uninstallCommands">uninstallCommands</a></code> | <code>string[]</code> | Commands to run in order to delete the program. |
| <code><a href="#pde.UrlInstallerOptions.property.updateCommands">updateCommands</a></code> | <code>string[]</code> | Any update commands that should be run after the component has been downloaded. |
| <code><a href="#pde.UrlInstallerOptions.property.versionCommand">versionCommand</a></code> | <code>string</code> | TODO: docs. |
| <code><a href="#pde.UrlInstallerOptions.property.downloadUrl">downloadUrl</a></code> | <code>string</code> | The URL that can be used to download the component. |
| <code><a href="#pde.UrlInstallerOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether or not the component is an executable Set this to true if the file that is downloaded is the executable. |

---

##### `installCommands`<sup>Required</sup> <a name="installCommands" id="pde.UrlInstallerOptions.property.installCommands"></a>

```typescript
public readonly installCommands: string[];
```

- *Type:* string[]
- *Default:* no install commands are run after downloading

Any install commands that should be run after the component has been downloaded.

---

##### `name`<sup>Required</sup> <a name="name" id="pde.UrlInstallerOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This should be the name of the program that is being installed.

---

##### `uninstallCommands`<sup>Required</sup> <a name="uninstallCommands" id="pde.UrlInstallerOptions.property.uninstallCommands"></a>

```typescript
public readonly uninstallCommands: string[];
```

- *Type:* string[]

Commands to run in order to delete the program.

---

##### `updateCommands`<sup>Optional</sup> <a name="updateCommands" id="pde.UrlInstallerOptions.property.updateCommands"></a>

```typescript
public readonly updateCommands: string[];
```

- *Type:* string[]
- *Default:* no update commands are run after downloading

Any update commands that should be run after the component has been downloaded.

---

##### `versionCommand`<sup>Optional</sup> <a name="versionCommand" id="pde.UrlInstallerOptions.property.versionCommand"></a>

```typescript
public readonly versionCommand: string;
```

- *Type:* string
- *Default:* TODO

TODO: docs.

---

##### `downloadUrl`<sup>Required</sup> <a name="downloadUrl" id="pde.UrlInstallerOptions.property.downloadUrl"></a>

```typescript
public readonly downloadUrl: string;
```

- *Type:* string

The URL that can be used to download the component.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="pde.UrlInstallerOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not the component is an executable Set this to true if the file that is downloaded is the executable.

If this is true, you probably don't also need any installCommands

---

### ZplugPlugins <a name="ZplugPlugins" id="pde.ZplugPlugins"></a>

#### Initializer <a name="Initializer" id="pde.ZplugPlugins.Initializer"></a>

```typescript
import { ZplugPlugins } from 'pde'

const zplugPlugins: ZplugPlugins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ZplugPlugins.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#pde.ZplugPlugins.property.pluginOptions">pluginOptions</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="pde.ZplugPlugins.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `pluginOptions`<sup>Optional</sup> <a name="pluginOptions" id="pde.ZplugPlugins.property.pluginOptions"></a>

```typescript
public readonly pluginOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### ZshProfileOptions <a name="ZshProfileOptions" id="pde.ZshProfileOptions"></a>

#### Initializer <a name="Initializer" id="pde.ZshProfileOptions.Initializer"></a>

```typescript
import { ZshProfileOptions } from 'pde'

const zshProfileOptions: ZshProfileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ZshProfileOptions.property.aliases">aliases</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#pde.ZshProfileOptions.property.zshPlugins">zshPlugins</a></code> | <code><a href="#pde.ZplugPlugins">ZplugPlugins</a>[]</code> | *No description.* |
| <code><a href="#pde.ZshProfileOptions.property.name">name</a></code> | <code>string</code> | The name of the profile. |
| <code><a href="#pde.ZshProfileOptions.property.profileFileName">profileFileName</a></code> | <code>string</code> | The file name of the profile. |
| <code><a href="#pde.ZshProfileOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | An initial set of environment variables to source. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="pde.ZshProfileOptions.property.aliases"></a>

```typescript
public readonly aliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zshPlugins`<sup>Optional</sup> <a name="zshPlugins" id="pde.ZshProfileOptions.property.zshPlugins"></a>

```typescript
public readonly zshPlugins: ZplugPlugins[];
```

- *Type:* <a href="#pde.ZplugPlugins">ZplugPlugins</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="pde.ZshProfileOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the profile.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.ZshProfileOptions.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The file name of the profile.

---

##### `env`<sup>Optional</sup> <a name="env" id="pde.ZshProfileOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An initial set of environment variables to source.

---

### ZshProfileProps <a name="ZshProfileProps" id="pde.ZshProfileProps"></a>

#### Initializer <a name="Initializer" id="pde.ZshProfileProps.Initializer"></a>

```typescript
import { ZshProfileProps } from 'pde'

const zshProfileProps: ZshProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ZshProfileProps.property.aliases">aliases</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#pde.ZshProfileProps.property.zshPlugins">zshPlugins</a></code> | <code><a href="#pde.ZplugPlugins">ZplugPlugins</a>[]</code> | *No description.* |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="pde.ZshProfileProps.property.aliases"></a>

```typescript
public readonly aliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zshPlugins`<sup>Optional</sup> <a name="zshPlugins" id="pde.ZshProfileProps.property.zshPlugins"></a>

```typescript
public readonly zshPlugins: ZplugPlugins[];
```

- *Type:* <a href="#pde.ZplugPlugins">ZplugPlugins</a>[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IHome <a name="IHome" id="pde.IHome"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#pde.Home">Home</a>, <a href="#pde.IHome">IHome</a>

Represents the users home directory.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.IHome.addExecutable">addExecutable</a></code> | *No description.* |
| <code><a href="#pde.IHome.addLocation">addLocation</a></code> | *No description.* |

---

##### `addExecutable` <a name="addExecutable" id="pde.IHome.addExecutable"></a>

```typescript
public addExecutable(scope: Construct, source: string, target: string): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="pde.IHome.addExecutable.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `source`<sup>Required</sup> <a name="source" id="pde.IHome.addExecutable.parameter.source"></a>

- *Type:* string

---

###### `target`<sup>Required</sup> <a name="target" id="pde.IHome.addExecutable.parameter.target"></a>

- *Type:* string

---

##### `addLocation` <a name="addLocation" id="pde.IHome.addLocation"></a>

```typescript
public addLocation(scope: Construct, source: string, target: string): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="pde.IHome.addLocation.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `source`<sup>Required</sup> <a name="source" id="pde.IHome.addLocation.parameter.source"></a>

- *Type:* string

---

###### `target`<sup>Required</sup> <a name="target" id="pde.IHome.addLocation.parameter.target"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.IHome.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.IHome.property.binLocation">binLocation</a></code> | <code>string</code> | The location where executables live. |
| <code><a href="#pde.IHome.property.homeLocation">homeLocation</a></code> | <code>string</code> | The users home directory. |
| <code><a href="#pde.IHome.property.homeVar">homeVar</a></code> | <code>string</code> | The environment variable that holds the path to the users home directory This should be used to represent the home directory in any git tracked files. |
| <code><a href="#pde.IHome.property.xdgConfigHome">xdgConfigHome</a></code> | <code>string</code> | The XDG_CONFIG_HOME location. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.IHome.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `binLocation`<sup>Required</sup> <a name="binLocation" id="pde.IHome.property.binLocation"></a>

```typescript
public readonly binLocation: string;
```

- *Type:* string

The location where executables live.

---

##### `homeLocation`<sup>Required</sup> <a name="homeLocation" id="pde.IHome.property.homeLocation"></a>

```typescript
public readonly homeLocation: string;
```

- *Type:* string

The users home directory.

Defaults to $HOME

---

##### `homeVar`<sup>Required</sup> <a name="homeVar" id="pde.IHome.property.homeVar"></a>

```typescript
public readonly homeVar: string;
```

- *Type:* string

The environment variable that holds the path to the users home directory This should be used to represent the home directory in any git tracked files.

---

##### `xdgConfigHome`<sup>Required</sup> <a name="xdgConfigHome" id="pde.IHome.property.xdgConfigHome"></a>

```typescript
public readonly xdgConfigHome: string;
```

- *Type:* string

The XDG_CONFIG_HOME location.

---

### IProfile <a name="IProfile" id="pde.IProfile"></a>

- *Extends:* <a href="#pde.IProfileBase">IProfileBase</a>

- *Implemented By:* <a href="#pde.BashProfile">BashProfile</a>, <a href="#pde.Profile">Profile</a>, <a href="#pde.ZshProfile">ZshProfile</a>, <a href="#pde.IProfile">IProfile</a>, <a href="#pde.IZshProfile">IZshProfile</a>

Represents a system profile i.e. bash, zsh, etc.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.IProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.IProfile.property.profileFileName">profileFileName</a></code> | <code>string</code> | The name of the profile file. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.IProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.IProfile.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The name of the profile file.

e.g. .zshrc, .bashrc, etc

---

### IProfileBase <a name="IProfileBase" id="pde.IProfileBase"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#pde.BashProfile">BashProfile</a>, <a href="#pde.Profile">Profile</a>, <a href="#pde.ProfileBase">ProfileBase</a>, <a href="#pde.SystemProfile">SystemProfile</a>, <a href="#pde.ZshProfile">ZshProfile</a>, <a href="#pde.IProfile">IProfile</a>, <a href="#pde.IProfileBase">IProfileBase</a>, <a href="#pde.ISystemProfile">ISystemProfile</a>, <a href="#pde.IZshProfile">IZshProfile</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.IProfileBase.addLines">addLines</a></code> | Add additional lines to the system profile. |
| <code><a href="#pde.IProfileBase.addToEnv">addToEnv</a></code> | Add additional environment variables. |
| <code><a href="#pde.IProfileBase.addToSystemPath">addToSystemPath</a></code> | Add additional paths to the system PATH. |

---

##### `addLines` <a name="addLines" id="pde.IProfileBase.addLines"></a>

```typescript
public addLines(lines: string[]): void
```

Add additional lines to the system profile.

###### `lines`<sup>Required</sup> <a name="lines" id="pde.IProfileBase.addLines.parameter.lines"></a>

- *Type:* string[]

---

##### `addToEnv` <a name="addToEnv" id="pde.IProfileBase.addToEnv"></a>

```typescript
public addToEnv(name: string, value: string): void
```

Add additional environment variables.

###### `name`<sup>Required</sup> <a name="name" id="pde.IProfileBase.addToEnv.parameter.name"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="pde.IProfileBase.addToEnv.parameter.value"></a>

- *Type:* string

---

##### `addToSystemPath` <a name="addToSystemPath" id="pde.IProfileBase.addToSystemPath"></a>

```typescript
public addToSystemPath(systemPath: string): void
```

Add additional paths to the system PATH.

###### `systemPath`<sup>Required</sup> <a name="systemPath" id="pde.IProfileBase.addToSystemPath.parameter.systemPath"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.IProfileBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.IProfileBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

### ISystemProfile <a name="ISystemProfile" id="pde.ISystemProfile"></a>

- *Extends:* <a href="#pde.IProfileBase">IProfileBase</a>

- *Implemented By:* <a href="#pde.SystemProfile">SystemProfile</a>, <a href="#pde.ISystemProfile">ISystemProfile</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.ISystemProfile.register">register</a></code> | TODO: docs. |

---

##### `register` <a name="register" id="pde.ISystemProfile.register"></a>

```typescript
public register(profile: IProfile): void
```

TODO: docs.

###### `profile`<sup>Required</sup> <a name="profile" id="pde.ISystemProfile.register.parameter.profile"></a>

- *Type:* <a href="#pde.IProfile">IProfile</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.ISystemProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.ISystemProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

### IZshProfile <a name="IZshProfile" id="pde.IZshProfile"></a>

- *Extends:* <a href="#pde.IProfile">IProfile</a>

- *Implemented By:* <a href="#pde.ZshProfile">ZshProfile</a>, <a href="#pde.IZshProfile">IZshProfile</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.IZshProfile.addAlias">addAlias</a></code> | *No description.* |

---

##### `addAlias` <a name="addAlias" id="pde.IZshProfile.addAlias"></a>

```typescript
public addAlias(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="pde.IZshProfile.addAlias.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="pde.IZshProfile.addAlias.parameter.command"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#pde.IZshProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#pde.IZshProfile.property.profileFileName">profileFileName</a></code> | <code>string</code> | The name of the profile file. |

---

##### `node`<sup>Required</sup> <a name="node" id="pde.IZshProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `profileFileName`<sup>Required</sup> <a name="profileFileName" id="pde.IZshProfile.property.profileFileName"></a>

```typescript
public readonly profileFileName: string;
```

- *Type:* string

The name of the profile file.

e.g. .zshrc, .bashrc, etc

---

## Enums <a name="Enums" id="Enums"></a>

### Platform <a name="Platform" id="pde.Platform"></a>

The platform that this dotfiles project is installed on.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#pde.Platform.LINUX">LINUX</a></code> | *No description.* |
| <code><a href="#pde.Platform.DARWIN">DARWIN</a></code> | *No description.* |

---

##### `LINUX` <a name="LINUX" id="pde.Platform.LINUX"></a>

---


##### `DARWIN` <a name="DARWIN" id="pde.Platform.DARWIN"></a>

---

