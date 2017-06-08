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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
require('./rxjs-extensions');
var app_routing_module_1 = require('./app-routing.module');
var collapse_module_1 = require('./Angular2UI/collapse/collapse.module');
var progressbar_module_1 = require('./Angular2UI/progressbar/progressbar.module');
var accordion_module_1 = require('./Angular2UI/accordion/accordion.module');
var app_component_1 = require('./app.component');
var about_component_1 = require('./about.component');
var skills_component_1 = require('./skills.component');
var projects_component_1 = require('./projects.component');
var experience_component_1 = require('./experience.component');
var education_component_1 = require('./education.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                collapse_module_1.CollapseModule,
                progressbar_module_1.ProgressbarModule,
                accordion_module_1.AccordionModule
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                skills_component_1.SkillsComponent,
                projects_component_1.ProjectsComponent,
                experience_component_1.ExperienceComponent,
                education_component_1.EducationComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map