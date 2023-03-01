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
exports.PnpmFile = void 0;
var projen_1 = require("projen");
var PnpmFile = /** @class */ (function (_super) {
    __extends(PnpmFile, _super);
    function PnpmFile(project, _options) {
        if (_options === void 0) { _options = {}; }
        return _super.call(this, project, 'common/config/rush/.pnpmfile.cjs', {
            committed: true,
            lines: [
                "'use strict';",
                '',
                "\/**",
                " * When using the PNPM package manager, you can use pnpmfile.js to workaround",
                " * dependencies that have mistakes in their package.json file.  (This feature is",
                ' * functionally similar to Yarn\'s "resolutions".)',
                " *",
                " * For details, see the PNPM documentation:",
                " * https://pnpm.js.org/docs/en/hooks.html",
                " *",
                " * IMPORTANT: SINCE THIS FILE CONTAINS EXECUTABLE CODE, MODIFYING IT IS LIKELY TO INVALIDATE",
                " * ANY CACHED DEPENDENCY ANALYSIS.  After any modification to pnpmfile.js, it's recommended to run",
                ' * "rush update --full" so that PNPM will recalculate all version selections.',
                " */",
                "module.exports = {",
                "  hooks: {",
                "    readPackage",
                "  }",
                "};",
                '',
                '\/**',
                ' * This hook is invoked during installation before a package\'s dependencies',
                ' * are selected.',
                ' * The `packageJson` parameter is the deserialized package.json',
                ' * contents for the package that is about to be installed.',
                ' * The `context` parameter provides a log() function.',
                ' * The return value is the updated object.',
                ' */',
                'function readPackage(packageJson, context) {',
                '',
                '  // // The karma types have a missing dependency on typings from the log4js package.',
                "  // if (packageJson.name === '@types/karma') {",
                "  //  context.log('Fixed up dependencies for @types/karma');",
                "  //  packageJson.dependencies['log4js'] = '0.6.38';",
                '  // }',
                '',
                '  return packageJson;',
                '}',
            ]
        }) || this;
    }
    return PnpmFile;
}(projen_1.TextFile));
exports.PnpmFile = PnpmFile;
