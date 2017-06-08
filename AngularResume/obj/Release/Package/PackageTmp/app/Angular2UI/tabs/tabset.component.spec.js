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
var tabs_module_1 = require('./tabs.module');
var html = "\n  <tabset [justified]=\"isJustified\"\n          [vertical]=\"isVertical\">\n    <tab heading=\"tab0\">tab0 content</tab>\n    <tab *ngFor=\"let tab of tabs\"\n         [disabled]=\"tab.disabled\"\n         [active]=\"tab.active\"\n         [removable]=\"tab.removable\"\n         (select)=\"_select($event)\"\n         (deselect)=\"_deselect($event)\"\n         (removed)=\"_removed($event)\"\n         [heading]=\"tab.title\">{{ tab.content }}</tab>\n  </tabset>\n";
function getTabTitles(nativeEl) {
    return nativeEl.querySelectorAll('.nav-link');
}
function getTabContent(nativeEl) {
    return nativeEl.querySelectorAll('.tab-content .tab-pane');
}
function expectActiveTabs(nativeEl, active) {
    var tabTitles = getTabTitles(nativeEl);
    var tabContent = getTabContent(nativeEl);
    expect(tabTitles.length).toBe(active.length);
    expect(tabContent.length).toBe(active.length);
    for (var i = 0; i < active.length; i++) {
        if (active[i]) {
            expect(tabTitles[i].classList).toContain('active');
            expect(tabContent[i].classList).toContain('active');
        }
        else {
            expect(tabTitles[i].classList).not.toContain('active');
            expect(tabContent[i].classList).not.toContain('active');
        }
    }
}
describe('Component: Tabs', function () {
    var fixture;
    var context;
    var element;
    // beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //   return tcb
    //     .overrideTemplate(TestTabsetComponent, html)
    //     .createAsync(TestTabsetComponent)
    //     .then((f: ComponentFixture<any>) => {
    //       fixture = f;
    //       context = fixture.componentInstance;
    //       spyOn(context, '_select');
    //       spyOn(context, '_deselect');
    //       spyOn(context, '_removed');
    //       element = fixture.nativeElement;
    //       fixture.detectChanges();
    //     });
    // })));
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestTabsetComponent],
            imports: [tabs_module_1.TabsModule]
        });
        testing_1.TestBed.overrideComponent(TestTabsetComponent, { set: { template: html } });
        fixture = testing_1.TestBed.createComponent(TestTabsetComponent);
        context = fixture.componentInstance;
        spyOn(context, '_select');
        spyOn(context, '_deselect');
        spyOn(context, '_removed');
        element = fixture.nativeElement;
        fixture.detectChanges();
    });
    it('should select first tab as active by default', function () {
        expectActiveTabs(element, [true, false, false, false]);
    });
    it('should set tab header', function () {
        var str = 'test title';
        context.tabs[1].title = str;
        fixture.detectChanges();
        var tabTitles = getTabTitles(element);
        expect(tabTitles[2].getElementsByTagName('span')[0].textContent).toBe(str);
    });
    it('should mark the requested tab as active', function () {
        context.tabs[0].active = true;
        fixture.detectChanges();
        expectActiveTabs(element, [false, true, false, false]);
    });
    it('should ignore click on disabled tab', function () {
        var tabTitles = getTabTitles(element);
        tabTitles[2].click();
        fixture.detectChanges();
        expectActiveTabs(element, [true, false, false, false]);
    });
    it('should appear additional button if removable is true', function () {
        var tabTitles = getTabTitles(element);
        expect(tabTitles[3].querySelectorAll('span span.glyphicon-remove-circle').length).toEqual(1);
    });
    it('should remove tab on click on remove icon', function () {
        var tabTitlesBefore = getTabTitles(element);
        expect(tabTitlesBefore.length).toEqual(4);
        var el = tabTitlesBefore[3].querySelectorAll('span span.glyphicon-remove-circle')[0];
        el.click();
        fixture.detectChanges();
        var tabTitlesAfter = getTabTitles(element);
        expect(tabTitlesAfter.length).toEqual(3);
    });
    it('should set tab as active on click and disable another active', function () {
        var tabTitles = getTabTitles(element);
        tabTitles[1].click();
        fixture.detectChanges();
        expectActiveTabs(element, [false, true, false, false]);
        tabTitles[0].click();
        fixture.detectChanges();
        expectActiveTabs(element, [true, false, false, false]);
    });
    it('should have only one active tab if several marked as active', function () {
        context.tabs[0].active = true;
        context.tabs[1].active = true;
        fixture.detectChanges();
        expectActiveTabs(element, [false, true, false, false]);
    });
    it('should add class nav-stacked for vertical mode', function () {
        expect(element.querySelectorAll('ul.nav')[0].classList).not.toContain('nav-stacked');
        context.isVertical = true;
        fixture.detectChanges();
        expect(element.querySelectorAll('ul.nav')[0].classList).toContain('nav-stacked');
    });
    it('should add class nav-justified for justified', function () {
        expect(element.querySelector('ul.nav').classList).not.toContain('nav-justified');
        context.isJustified = true;
        fixture.detectChanges();
        expect(element.querySelector('ul.nav').classList).toContain('nav-justified');
    });
    it('should emit select/deselect', function () {
        var tabTitles = getTabTitles(element);
        tabTitles[1].click();
        fixture.detectChanges();
        expect(context._deselect).toHaveBeenCalled();
        expect(context._select).toHaveBeenCalledWith(jasmine.objectContaining({
            heading: 'tab1'
        }));
    });
    it('should emit remove on remove tab', function () {
        var tabTitles = getTabTitles(element);
        var el = tabTitles[3].querySelectorAll('span span.glyphicon-remove-circle')[0];
        el.click();
        fixture.detectChanges();
        expect(context._removed).toHaveBeenCalledWith(jasmine.objectContaining({
            heading: 'tab3'
        }));
    });
});
var TestTabsetComponent = (function () {
    function TestTabsetComponent() {
        this.isVertical = false;
        this.isJustified = false;
        this.tabs = [
            { title: 'tab1', content: 'tab1 content' },
            { title: 'tab2', content: 'tab2 content', disabled: true },
            { title: 'tab3', content: 'tab3 content', removable: true }
        ];
    }
    TestTabsetComponent.prototype._select = function (e) {
        return e;
    };
    TestTabsetComponent.prototype._deselect = function (e) {
        return e;
    };
    TestTabsetComponent.prototype._removed = function (e) {
        return e;
    };
    TestTabsetComponent = __decorate([
        core_1.Component({
            selector: 'tabs-test',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TestTabsetComponent);
    return TestTabsetComponent;
}());
//# sourceMappingURL=tabset.component.spec.js.map