"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NgGrid_1 = require('../directives/NgGrid');
var NgGridItem_1 = require('../directives/NgGridItem');
var NgGridPlaceholder_1 = require('../components/NgGridPlaceholder');
//import { NgGrid, NgGridItem, NgGridItemConfig, NgGridItemEvent, NgGridPlaceholder } from './NgGrid.module';
var NgGridModule = (function () {
    function NgGridModule() {
    }
    NgGridModule = __decorate([
        core_1.NgModule({
            declarations: [NgGrid_1.NgGrid, NgGridItem_1.NgGridItem, NgGridPlaceholder_1.NgGridPlaceholder],
            entryComponents: [NgGridPlaceholder_1.NgGridPlaceholder],
            exports: [NgGrid_1.NgGrid, NgGridItem_1.NgGridItem]
        }), 
        __metadata('design:paramtypes', [])
    ], NgGridModule);
    return NgGridModule;
}());
exports.NgGridModule = NgGridModule;
//# sourceMappingURL=NgGrid.module.js.map