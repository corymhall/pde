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
exports.RushConfig = void 0;
var projen_1 = require("projen");
;
var RushConfig = /** @class */ (function (_super) {
    __extends(RushConfig, _super);
    function RushConfig(project, options) {
        return _super.call(this, project, 'rush.json', {
            allowComments: true,
            committed: true,
            obj: __assign({ $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json", rushVersion: '5.92.0', pnpmVersion: '6.7.1', ensureConsistentVersions: true, nodeSupportedVersionRange: '>=12.13.0 <13.0.0 || >=14.15.0 <15.0.0 || >=16.13.0 <17.0.0' }, options)
        }) || this;
    }
    return RushConfig;
}(projen_1.JsonFile));
exports.RushConfig = RushConfig;
