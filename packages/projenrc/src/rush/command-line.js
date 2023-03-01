"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CommandLine = void 0;
var projen_1 = require("projen");
var CommandLine = /** @class */ (function (_super) {
    __extends(CommandLine, _super);
    function CommandLine(project, _options) {
        if (_options === void 0) { _options = {}; }
        return _super.call(this, project, 'common/config/rush/command-line.json', {
            allowComments: true,
            committed: true,
            obj: {
                $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json",
                phases: [
                    {
                        name: '_phase:build',
                        dependencies: {
                            upstream: ['_phase:build']
                        },
                        ignoreMissingScript: true,
                        allowWarningsOnSuccess: false
                    },
                    {
                        name: '_phase:test',
                        dependencies: {
                            self: ['_phase:build']
                        },
                        ignoreMissingScript: true,
                        allowWarningsOnSuccess: false
                    },
                    {
                        name: '_phase:lint',
                        ignoreMissingScript: true,
                        allowWarningsOnSuccess: false
                    },
                ],
                commands: [
                    {
                        commandKind: 'global',
                        name: 'projen',
                        summary: 'Runs projen',
                        shellCommand: 'ts-node --project tsconfig.dev.json .projenrc.ts'
                    },
                    {
                        commandKind: 'phased',
                        name: 'build',
                        phases: ['_phase:build'],
                        enableParallelism: true,
                        incremental: true,
                        watchOptions: {
                            alwaysWatch: false,
                            watchPhases: ["_phase:build"]
                        }
                    },
                    {
                        commandKind: 'phased',
                        name: 'test',
                        summary: 'build and test all projects',
                        phases: ['_phase:build', '_phase:test'],
                        enableParallelism: true,
                        incremental: true,
                        watchOptions: {
                            alwaysWatch: false,
                            watchPhases: ["_phase:build", "_phase:test"]
                        }
                    },
                    {
                        commandKind: 'phased',
                        name: 'lint',
                        summary: 'lint all projects',
                        phases: ['_phase:lint'],
                        enableParallelism: true,
                        incremental: true
                    },
                ]
            }
        }) || this;
    }
    return CommandLine;
}(projen_1.JsonFile));
exports.CommandLine = CommandLine;
