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
var collapse_module_1 = require('./collapse.module');
var template = "\n  <div [collapse]=\"isCollapsed\">\n    collapse directive\n    <div [hidden]=\"isHidden\">dynamic content</div>\n  </div>\n";
var TestCollapseComponent = (function () {
    function TestCollapseComponent() {
    }
    TestCollapseComponent = __decorate([
        core_1.Component({
            selector: 'collapse-test',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], TestCollapseComponent);
    return TestCollapseComponent;
}());
// TODO: - add animate
//       - check callbacks have been called or not called (expanding, expanded, collapsing, collapsed)
describe('Directive: Collapse', function () {
    var fixture;
    var element;
    var context;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestCollapseComponent],
            imports: [collapse_module_1.CollapseModule]
        });
        fixture = testing_1.TestBed.createComponent(TestCollapseComponent);
        fixture.detectChanges();
        context = fixture.componentInstance;
        element = fixture.nativeElement.querySelector('.collapse');
    });
    it('should have collapse class', function () {
        var div = fixture.nativeElement.querySelector('div');
        expect(div.classList).toContain('collapse');
    });
    it('should add/remove in class on toggle', function () {
        expect(element.classList).toContain('in');
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.classList).not.toContain('in');
    });
    it('should be hidden on initialization if isCollapsed = true', function () {
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.offsetHeight).toBe(0);
    });
    xit('should not trigger any animation on initialization if isCollapsed = true', function () {
        expect(true);
    });
    it('should collapse if isCollapsed = true on subsequent use', function () {
        context.isCollapsed = false;
        fixture.detectChanges();
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.offsetHeight).toBe(0);
    });
    it('should show after toggled from collapsed', function () {
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.offsetHeight).toBe(0);
        context.isCollapsed = false;
        fixture.detectChanges();
        expect(element.offsetHeight).not.toBe(0);
    });
    xit('should not trigger any animation on initialization if isCollapsed = false', function () {
        expect(true);
    });
    it('should expand if isCollapsed = false on subsequent use', function () {
        context.isCollapsed = false;
        fixture.detectChanges();
        context.isCollapsed = true;
        fixture.detectChanges();
        context.isCollapsed = false;
        fixture.detectChanges();
        expect(element.offsetHeight).not.toBe(0);
    });
    it('should collapse if isCollapsed = true on subsequent uses', function () {
        context.isCollapsed = false;
        fixture.detectChanges();
        context.isCollapsed = true;
        fixture.detectChanges();
        context.isCollapsed = false;
        fixture.detectChanges();
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.offsetHeight).toBe(0);
    });
    it('should change aria-expanded attribute', function () {
        expect(element.getAttribute('aria-expanded')).toBe('true');
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.getAttribute('aria-expanded')).toBe('false');
    });
    it('should change aria-hidden attribute', function () {
        expect(element.getAttribute('aria-hidden')).toBe('false');
        context.isCollapsed = true;
        fixture.detectChanges();
        expect(element.getAttribute('aria-hidden')).toBe('true');
    });
    describe('dynamic content', function () {
        it('should grow accordingly when content size inside collapse increases', function () {
            context.isCollapsed = false;
            context.isHidden = true;
            fixture.detectChanges();
            var heightWithoutDynamic = element.offsetHeight;
            context.isHidden = false;
            fixture.detectChanges();
            var heightWithDynamic = element.offsetHeight;
            expect(heightWithDynamic).toBeGreaterThan(heightWithoutDynamic);
        });
        it('should shrink accordingly when content size inside collapse decreases', function () {
            context.isCollapsed = false;
            context.isHidden = false;
            fixture.detectChanges();
            var heightWithDynamic = element.offsetHeight;
            context.isHidden = true;
            fixture.detectChanges();
            var heightWithoutDynamic = element.offsetHeight;
            expect(heightWithoutDynamic).toBeLessThan(heightWithDynamic);
        });
    });
    describe('expanding callback returning a promise', function () {
        xit('should wait for it to resolve before animating', function () {
            expect(true);
        });
        xit('should not animate if it rejects', function () {
            expect(true);
        });
    });
    describe('collapsing callback returning a promise', function () {
        xit('should wait for it to resolve before animating', function () {
            expect(true);
        });
        xit('should not animate if it rejects', function () {
            expect(true);
        });
    });
});
//# sourceMappingURL=collapse.directive.spec.js.map