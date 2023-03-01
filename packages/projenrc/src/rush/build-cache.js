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
exports.RushBuildCache = void 0;
var projen_1 = require("projen");
var RushBuildCache = /** @class */ (function (_super) {
    __extends(RushBuildCache, _super);
    function RushBuildCache(project, _options) {
        if (_options === void 0) { _options = {}; }
        return _super.call(this, project, 'common/config/rush/build-cache.json', {
            allowComments: true,
            committed: true,
            obj: {
                $schema: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json",
                buildCacheEnabled: true,
                cacheProvider: 'local-only'
            }
        }) || this;
    }
    return RushBuildCache;
}(projen_1.JsonFile));
exports.RushBuildCache = RushBuildCache;
