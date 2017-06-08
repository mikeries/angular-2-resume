"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var alert_component_1 = require('./alert.component');
var alert_module_1 = require('./alert.module');
describe('Component: Alert', function () {
    var fixture;
    var context;
    var overTemplate = "\n    <div class=\"alert\" role=\"alert\" [ngClass]=\"classes\" *ngIf=\"!closed\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" (click)=\"onClose()\" (touch)=\"onClose()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </div>\n  ";
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [TestAlertComponent], imports: [alert_module_1.AlertModule] });
        testing_1.TestBed.overrideComponent(TestAlertComponent, { set: { template: overTemplate } });
        fixture = testing_1.TestBed.createComponent(TestAlertComponent);
        context = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });
    it('should have a default type alert-warning', function () {
        context.ngOnInit();
        expect(context.type).toEqual("warning");
        expect(context.classes[0]).toEqual("alert-warning");
    });
    it('should have class dismissible if dismissible=true', function () {
        context.dismissible = true;
        context.ngOnInit();
        expect(context.classes.length).toEqual(2);
        expect(context.classes[1]).toEqual("alert-dismissible");
    });
    it('should be dismissed by timeout', function (done) {
        context.dismissOnTimeout = 1000;
        context
            .close
            .subscribe(function () {
            expect(context.closed).toBeTruthy();
            done();
        });
        context.ngOnInit();
    });
    it('should be closed by public method onClose', function () {
        context.ngOnInit();
        expect(context.closed).toBeFalsy();
        context.onClose();
        expect(context.closed).toBeTruthy();
    });
});
var TestAlertComponent = (function (_super) {
    __extends(TestAlertComponent, _super);
    function TestAlertComponent() {
        _super.apply(this, arguments);
    }
    TestAlertComponent = __decorate([
        core_1.Component({
            selector: 'alert-test',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TestAlertComponent);
    return TestAlertComponent;
}(alert_component_1.AlertComponent));
//# sourceMappingURL=alert.component.spec.js.map