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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.MonorepoTypeScriptProject = exports.MonorepoRoot = void 0;
var path = require("path");
var projen_1 = require("projen");
var javascript_1 = require("projen/lib/javascript");
var rush_project_js_1 = require("./rush-project.js");
var MonorepoRoot = /** @class */ (function (_super) {
    __extends(MonorepoRoot, _super);
    function MonorepoRoot(options) {
        var _this = _super.call(this, __assign(__assign({}, options), { projenrcTs: true, sampleCode: false, jest: false, eslint: false, githubOptions: {
                mergify: false
            } })) || this;
        _this.projects = [];
        _this.postInstallDependencies = new Array();
        _this.rushProject = new rush_project_js_1.RushProject(_this);
        for (var _i = 0, _a = [_this.tsconfig, _this.tsconfigDev]; _i < _a.length; _i++) {
            var tsconfig = _a[_i];
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('compilerOptions.composite', true);
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('compilerOptions.moduleResolution', 'nodenext');
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('compilerOptions.module', 'nodenext');
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addToArray('compilerOptions.lib', 'dom');
        }
        _this.package.addField('type', 'module');
        _this.gitignore.exclude('**/.rush/temp');
        _this.gitignore.exclude('common/deploy/');
        _this.gitignore.exclude('common/temp/');
        _this.tasks.removeTask('build');
        _this.tasks.addTask('build', {
            steps: [{ spawn: 'default' }, { exec: 'rush build' }]
        });
        return _this;
    }
    MonorepoRoot.prototype.register = function (project) {
        this.rushProject.addProject({
            packageName: project.name,
            projectFolder: path.relative(this.outdir, project.outdir),
            skipRushCheck: false
        });
        this.projects.push(project);
    };
    MonorepoRoot.prototype.synth = function () {
        this.finalEscapeHatches();
        _super.prototype.synth.call(this);
    };
    MonorepoRoot.prototype.finalEscapeHatches = function () {
        for (var _i = 0, _a = [this.tsconfig, this.tsconfigDev]; _i < _a.length; _i++) {
            var tsconfig = _a[_i];
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('references', this.projects.map(function (p) { return ({ path: "packages/".concat(p.name) }); }));
        }
    };
    /**
     * Allows a sub project to request installation of dependency at the Monorepo root
     * They must provide a function that is executed after dependencies have been installed
     * If this function returns true, the install command is run for a second time after all sub project requests have run.
     * This is used to resolve dependency versions from `*` to a concrete version constraint.
     */
    MonorepoRoot.prototype.requestInstallDependencies = function (request) {
        this.postInstallDependencies.push(request);
    };
    MonorepoRoot.prototype.postSynthesize = function () {
        if (this.postInstallDependencies.length) {
            var nodePkg = this.package;
            nodePkg.installDependencies();
            var completedRequests = this.postInstallDependencies.map(function (request) { return request(); });
            if (completedRequests.some(Boolean)) {
                nodePkg.installDependencies();
            }
            this.postInstallDependencies = [];
        }
    };
    return MonorepoRoot;
}(projen_1.typescript.TypeScriptProject));
exports.MonorepoRoot = MonorepoRoot;
var MonorepoTypeScriptProject = /** @class */ (function (_super) {
    __extends(MonorepoTypeScriptProject, _super);
    function MonorepoTypeScriptProject(props) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var remainder = without(props, 'parent', 'name', 'description', 'deps', 'peerDeps', 'devDeps', 'excludeDepsFromUpgrade');
        _this = _super.call(this, __assign({ parent: props.parent, outdir: "packages/".concat(props.name), name: props.name, description: props.description, repositoryDirectory: "packages/".concat(props.name), defaultReleaseBranch: 'REQUIRED-BUT-SHOULDNT-BE', release: false, eslint: true, sampleCode: false, packageManager: javascript_1.NodePackageManager.PNPM, deps: packageNames(props.deps), peerDeps: packageNames(props.peerDeps), devDeps: packageNames(props.devDeps) }, remainder)) || this;
        _this.parent = props.parent;
        // Tasks
        (_a = _this.tasks.tryFind('default')) === null || _a === void 0 ? void 0 : _a.reset('(cd `git rev-parse --show-toplevel`; npx projen default)');
        _this.tasks.removeTask('clobber');
        _this.tasks.removeTask('eject');
        _this.tasks.removeTask('build');
        _this.tasks.removeTask('test');
        _this.tasks.removeTask('lint');
        _this.setScript('build', 'tsc --build');
        _this.setScript('test', 'jest --passWithNoTests --updateSnapshot');
        _this.setScript('lint', 'eslint --ext .ts,.tsx --fix --no-error-on-unmatched-pattern src test build-tools');
        _this.setScript('_phase:build', 'rushx build');
        _this.setScript('_phase:test', 'rushx test');
        _this.setScript('_phase:lint', 'rushx lint');
        var mod = (_b = props.module) !== null && _b !== void 0 ? _b : true;
        // Composite project and references
        var allDeps = __spreadArray(__spreadArray(__spreadArray([], ((_c = props.deps) !== null && _c !== void 0 ? _c : []), true), ((_d = props.peerDeps) !== null && _d !== void 0 ? _d : []), true), ((_e = props.devDeps) !== null && _e !== void 0 ? _e : []), true);
        for (var _i = 0, _f = [_this.tsconfig, _this.tsconfigDev]; _i < _f.length; _i++) {
            var tsconfig = _f[_i];
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('compilerOptions.composite', true);
            if (mod)
                tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('compilerOptions.moduleResolution', 'nodenext');
            if (mod)
                tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('compilerOptions.module', 'nodenext');
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addToArray('compilerOptions.lib', 'dom');
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.addInclude('src/.gen/**/*.ts');
            tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.file.addOverride('references', allDeps.filter(isMonorepoTypeScriptProject).map(function (p) { return ({ path: path.relative(_this.outdir, p.outdir) }); }));
        }
        // FIXME: I don't know why `tsconfig.dev.json` doesn't have an outdir, or where it's used,
        // but it's causing in-place `.js` files to appear.
        _this.tsconfigDev.file.addOverride('compilerOptions.outDir', 'lib');
        // Install dependencies via the parent project
        _this.package.installDependencies = function () {
            _this.parent.requestInstallDependencies(function () { return _this.package.resolveDepsAndWritePackageJson(); });
        };
        // Need to hack ESLint config
        // .eslintrc.js will take precedence over the JSON file, it will load the
        // JSON file and patch it with a dynamic directory name that cannot be represented in
        // plain JSON (see https://github.com/projen/projen/issues/2405).
        var eslintRc = new projen_1.SourceCode(_this, '.eslintrc.js');
        eslintRc.line("var path = require('path');");
        eslintRc.line("var fs = require('fs');");
        eslintRc.line("var contents = fs.readFileSync('.eslintrc.json', { encoding: 'utf-8' });");
        eslintRc.line("// Strip comments, JSON.parse() doesn't like those");
        eslintRc.line("contents = contents.replace(/^\\/\\/.*$/m, '');");
        eslintRc.line("var json = JSON.parse(contents);");
        eslintRc.line("// Patch the .json config with something that can only be represented in JS");
        eslintRc.line("json.parserOptions.tsconfigRootDir = __dirname;");
        eslintRc.line("module.exports = json;");
        props.parent.register(_this);
        if (mod)
            _this.package.addField('type', 'module');
        return _this;
    }
    return MonorepoTypeScriptProject;
}(projen_1.typescript.TypeScriptProject));
exports.MonorepoTypeScriptProject = MonorepoTypeScriptProject;
function without(x) {
    var ks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ks[_i - 1] = arguments[_i];
    }
    var ret = __assign({}, x);
    for (var _a = 0, ks_1 = ks; _a < ks_1.length; _a++) {
        var k = ks_1[_a];
        delete ret[k];
    }
    return ret;
}
function packageNames(xs) {
    if (!xs) {
        return undefined;
    }
    return xs.map(function (x) { return (typeof x === 'string' ? x : "".concat(x.name, "@workspace:*")); });
}
function isMonorepoTypeScriptProject(x) {
    return typeof x === 'object' && !!x && x instanceof MonorepoTypeScriptProject;
}
