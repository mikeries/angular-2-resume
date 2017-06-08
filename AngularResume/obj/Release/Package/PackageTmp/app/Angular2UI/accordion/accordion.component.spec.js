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
var accordion_module_1 = require('./accordion.module');
var html = "\n  <accordion [closeOthers]=\"oneAtATime\">\n\n    <accordion-group heading=\"Panel 1\"\n                     [isOpen]=\"panels[0].isOpen\"\n                     [isDisabled]=\"panels[0].isDisabled\">\n      Content of panel 1\n    </accordion-group>\n\n    <accordion-group heading=\"Panel 2\"\n                     [isOpen]=\"panels[1].isOpen\"\n                     [isDisabled]=\"panels[1].isDisabled\">\n      Content of panel 2\n    </accordion-group>\n\n    <accordion-group heading=\"Panel 3\"\n                     [isOpen]=\"panels[2].isOpen\"\n                     [isDisabled]=\"panels[2].isDisabled\">\n      Content of panel 3\n    </accordion-group>\n\n  </accordion>\n";
function getPanels(element) {
    return Array.from(element.querySelectorAll('accordion-group'));
}
function expectOpenPanels(nativeEl, openPanelsDef) {
    var panels = getPanels(nativeEl);
    expect(panels.length).toBe(openPanelsDef.length);
    for (var i = 0; i < panels.length; i++) {
        if (openPanelsDef[i]) {
            expect(panels[i].classList).toContain('panel-open');
        }
        else {
            expect(panels[i].classList).not.toContain('panel-open');
        }
    }
}
function hasTitle(element, str) {
    return element.textContent === str;
}
describe('Component: Accordion', function () {
    var fixture;
    var context;
    var element;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [TestAccordionComponent], imports: [accordion_module_1.AccordionModule] });
        testing_1.TestBed.overrideComponent(TestAccordionComponent, { set: { template: html } });
        fixture = testing_1.TestBed.createComponent(TestAccordionComponent);
        context = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });
    it('should have no open panels', function () {
        expectOpenPanels(element, [false, false, false]);
    });
    it('should have open panel based on binding', function () {
        context.panels[0].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
    });
    it('should toggle panels independently', function () {
        context.oneAtATime = false;
        context.panels[1].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [false, true, false]);
        context.panels[0].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [true, true, false]);
        context.panels[1].isOpen = false;
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
        context.panels[2].isOpen = true;
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, true]);
        context.panels[0].isOpen = false;
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, true]);
        context.panels[2].isOpen = false;
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, false]);
    });
    it('should have the appropriate heading', function () {
        var titles = Array.from(element.querySelectorAll('.panel-heading a span'));
        titles.forEach(function (title, idx) { return expect(hasTitle(title, "Panel " + (idx + 1))).toBe(true); });
    });
    it('should only open one at a time', function () {
        var headingLinks = element.querySelectorAll('.panel-title a');
        headingLinks[0].click();
        fixture.detectChanges();
        expectOpenPanels(element, [true, false, false]);
        headingLinks[2].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, true]);
        headingLinks[2].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, false]);
    });
    it('should have only one open panel even if binding says otherwise', function () {
        context.panels[0].isOpen = true;
        context.panels[1].isOpen = true;
        // which of panels should be opened there? the first or the last one? (now - last)
        fixture.detectChanges();
        expectOpenPanels(element, [false, true, false]);
    });
    it('should not open disabled panels from click', function () {
        context.panels[0].isDisabled = true;
        fixture.detectChanges();
        var headingLinks = element.querySelectorAll('.panel-title a');
        headingLinks[0].click();
        fixture.detectChanges();
        expectOpenPanels(element, [false, false, false]);
    });
});
var TestAccordionComponent = (function () {
    function TestAccordionComponent() {
        this.oneAtATime = true;
        this.panels = [
            { isOpen: false, isDisabled: false },
            { isOpen: false, isDisabled: false },
            { isOpen: false, isDisabled: false }
        ];
    }
    TestAccordionComponent = __decorate([
        core_1.Component({
            selector: 'accordion-test',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TestAccordionComponent);
    return TestAccordionComponent;
}());
//# sourceMappingURL=accordion.component.spec.js.map