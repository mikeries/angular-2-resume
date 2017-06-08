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
var forms_1 = require('@angular/forms');
var buttons_module_1 = require('./buttons.module');
var html = "\n  <div>\n    <button type=\"button\" id=\"default\" [(ngModel)]=\"singleModel\" btnCheckbox>\n      Default\n    </button>\n\n    <button type=\"button\" id=\"disabled\" disabled [(ngModel)]=\"singleModel\" btnCheckbox>\n      Disabled\n    </button>\n\n    <button type=\"button\" id=\"custom\" type=\"button\" class=\"btn btn-primary\"\n            [(ngModel)]=\"singleModel\" btnCheckbox\n            btnCheckboxTrue=\"1\" btnCheckboxFalse=\"0\">\n      Single Toggle\n    </button>\n\n    <div class=\"btn-group checkbox\">\n      <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.left\" btnCheckbox>Left</label>\n      <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.middle\" btnCheckbox>Middle</label>\n      <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.right\" btnCheckbox>Right</label>\n    </div>\n\n    <div class=\"btn-group radio\">\n      <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\">Left</label>\n      <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</label>\n      <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\">Right</label>\n      <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"1\" disabled>Disabled</label>\n    </div>\n\n    <div class=\"btn-group radioUncheckable\">\n      <label class=\"btn btn-success\" [(ngModel)]=\"radioUncheckableModel\" btnRadio=\"Left\" uncheckable>Left</label>\n      <label class=\"btn btn-success\" [(ngModel)]=\"radioUncheckableModel\" btnRadio=\"Middle\" uncheckable>Middle</label>\n      <label class=\"btn btn-success\" [(ngModel)]=\"radioUncheckableModel\" btnRadio=\"Right\" uncheckable>Right</label>\n    </div>\n  </div>\n";
describe('Directive: Buttons', function () {
    var fixture;
    var context;
    var element;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestButtonsComponent],
            imports: [buttons_module_1.ButtonsModule, forms_1.FormsModule]
        });
        testing_1.TestBed.overrideComponent(TestButtonsComponent, { set: { template: html } });
        fixture = testing_1.TestBed.createComponent(TestButtonsComponent);
        context = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });
    describe('checkbox', function () {
        xit('should work correctly with default model values', function () {
            expect(element.querySelector('#default').classList).not.toContain('active');
            context.singleModel = true;
            fixture.detectChanges();
            expect(element.querySelector('#default').classList).toContain('active');
        });
        xit('should bind custom model values', function () {
            expect(element.querySelector('#custom').classList).not.toContain('active');
            context.singleModel = '1';
            fixture.detectChanges();
            expect(element.querySelector('#custom').classList).toContain('active');
        });
        it('should toggle default model values on click', function () {
            context.singleModel = false;
            fixture.detectChanges();
            var btn = element.querySelector('#default');
            btn.click();
            fixture.detectChanges();
            expect(context.singleModel).toEqual(true);
            expect(btn.classList).toContain('active');
            btn.click();
            fixture.detectChanges();
            expect(context.singleModel).toEqual(false);
            expect(btn.classList).not.toContain('active');
        });
        it('should toggle custom model values on click', function () {
            var btn = element.querySelector('#custom');
            btn.click();
            fixture.detectChanges();
            expect(context.singleModel).toEqual('1');
            expect(btn.classList).toContain('active');
            btn.click();
            fixture.detectChanges();
            expect(context.singleModel).toEqual('0');
            expect(btn.classList).not.toContain('active');
        });
        it('should not toggle when disabled', function () {
            context.singleModel = false;
            fixture.detectChanges();
            var btn = element.querySelector('#disabled');
            btn.click();
            fixture.detectChanges();
            expect(context.singleModel).toEqual(false);
            expect(btn.classList).not.toContain('active');
            btn.click();
            fixture.detectChanges();
            expect(context.singleModel).toEqual(false);
            expect(btn.classList).not.toContain('active');
        });
        xit('should work for btn-group', function () {
            var btn = element.querySelector('.btn-group.checkbox');
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
        });
    });
    xdescribe('radio', function () {
        it('should set active class based on model', function () {
            var btn = element.querySelector('.btn-group.radio');
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
            context.radioModel = 'Left';
            fixture.detectChanges();
            expect(btn.children[0].classList).toContain('active');
            expect(btn.children[1].classList).not.toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
        });
        it('should set active class via click', function () {
            var btn = element.querySelector('.btn-group.radio');
            delete context.radioModel;
            expect(context.radioModel).toBeUndefined();
            btn.children[2].click();
            fixture.detectChanges();
            expect(context.radioModel).toEqual('Right');
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).not.toContain('active');
            expect(btn.children[2].classList).toContain('active');
            btn.children[1].click();
            fixture.detectChanges();
            expect(context.radioModel).toEqual('Middle');
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
        });
        it('should do nothing when clicking an active radio', function () {
            var btn = element.querySelector('.btn-group.radio');
            expect(context.radioModel).toEqual('Middle');
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
            btn.children[1].click();
            fixture.detectChanges();
            expect(context.radioModel).toEqual('Middle');
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
        });
        xit('should not toggle when disabled', function () {
            var btn = element.querySelector('.btn-group.radio');
            expect(context.radioModel).toEqual('Middle');
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[3].classList).not.toContain('active');
            context.radioModel = '1';
            fixture.detectChanges();
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[3].classList).not.toContain('active');
            btn.children[3].click();
            fixture.detectChanges();
            expect(btn.children[1].classList).toContain('active');
            expect(btn.children[3].classList).not.toContain('active');
        });
        xit('should unset active class via click', function () {
            var btn = element.querySelector('.btn-group.radioUncheckable');
            expect(context.radioUncheckableModel).toBeUndefined();
            btn.children[0].click();
            fixture.detectChanges();
            expect(context.radioUncheckableModel).toEqual('Left');
            expect(btn.children[0].classList).toContain('active');
            expect(btn.children[1].classList).not.toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
            btn.children[0].click();
            fixture.detectChanges();
            expect(context.radioUncheckableModel).toBeNull();
            expect(btn.children[0].classList).not.toContain('active');
            expect(btn.children[1].classList).not.toContain('active');
            expect(btn.children[2].classList).not.toContain('active');
        });
    });
});
var TestButtonsComponent = (function () {
    function TestButtonsComponent() {
        this.singleModel = '0';
        this.checkModel = { left: false, middle: true, right: false };
        this.radioModel = 'Middle';
    }
    TestButtonsComponent = __decorate([
        core_1.Component({
            selector: 'buttons-test',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TestButtonsComponent);
    return TestButtonsComponent;
}());
//# sourceMappingURL=button.directive.spec.js.map