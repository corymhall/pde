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
exports.RushProject = void 0;
var projen_1 = require("projen");
var rush = require("./rush/index.js");
var RushProject = /** @class */ (function (_super) {
    __extends(RushProject, _super);
    function RushProject(project) {
        var _this = _super.call(this, project) || this;
        _this.projects = [];
        new rush.PnpmFile(project);
        new rush.RushConfig(project, {
            repository: {
                url: 'https://github.com/corymhall/pde'
            },
            projects: _this.projects
        });
        new rush.PnpmConfig(project);
        new rush.RushBuildCache(project);
        new rush.CommandLine(project);
        new rush.Experiments(project);
        return _this;
    }
    RushProject.prototype.addProject = function (project) {
        this.projects.push(project);
    };
    return RushProject;
}(projen_1.Component));
exports.RushProject = RushProject;
