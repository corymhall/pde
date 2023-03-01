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
exports.__esModule = true;
exports.PnpmConfig = void 0;
var projen_1 = require("projen");
var PnpmConfig = /** @class */ (function (_super) {
    __extends(PnpmConfig, _super);
    function PnpmConfig(project, options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, project, 'common/config/rush/pnpm-config.json', {
            allowComments: true,
            committed: true,
            obj: __assign({ $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json", useWorkspaces: true, strictPeerDependencies: true, pnpmStore: 'local' }, options)
        }) || this;
    }
    return PnpmConfig;
}(projen_1.JsonFile));
exports.PnpmConfig = PnpmConfig;
