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
var testing_1 = require('@angular/core/testing');
var file_uploader_class_1 = require('./file-uploader.class');
var file_upload_module_1 = require('./file-upload.module');
var ContainerComponent = (function () {
    function ContainerComponent() {
        this.uploader = new file_uploader_class_1.FileUploader({ url: 'localhost:3000' });
    }
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'container',
            template: "<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />"
        }), 
        __metadata('design:paramtypes', [])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
describe('Directive: FileSelectDirective', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [file_upload_module_1.FileUploadModule],
            declarations: [ContainerComponent],
            providers: [ContainerComponent]
        });
    });
    it('should be fine', testing_1.inject([ContainerComponent], function (fixture) {
        expect(fixture).not.toBeNull();
    }));
});
//# sourceMappingURL=file-drop.directive.spec.js.map