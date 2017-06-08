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
var carousel_module_1 = require('./carousel.module');
var html = "\n  <div id=\"c1\">\n    <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\">\n      <slide *ngFor=\"let slide of slides; let index=index\"\n             [active]=\"slide.active\">\n        <img [src]=\"slide.image\" style=\"margin:auto;\">\n        <div class=\"carousel-caption\">\n          <h4>Slide {{index}}</h4>\n          <p>{{slide.text}}</p>\n        </div>\n      </slide>\n    </carousel>\n  </div>\n  \n  <div id=\"c2\">\n    <carousel>\n      <slide>slide1</slide>\n      <slide>slide2</slide>\n    </carousel>\n  </div>\n";
function expectActiveSlides(nativeEl, active) {
    var slideElms = nativeEl.querySelectorAll('.carousel-item');
    var indicatorElms = nativeEl.querySelectorAll('ol.carousel-indicators > li');
    expect(slideElms.length).toBe(active.length);
    expect(indicatorElms.length).toBe(active.length);
    for (var i = 0; i < active.length; i++) {
        if (active[i]) {
            expect(slideElms[i].classList).toContain('active');
            expect(indicatorElms[i].classList).toContain('active');
        }
        else {
            expect(slideElms[i].classList).not.toContain('active');
            expect(indicatorElms[i].classList).not.toContain('active');
        }
    }
}
describe('Component: Carousel', function () {
    var fixture;
    var context;
    var element;
    var clean;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestCarouselComponent],
            imports: [carousel_module_1.CarouselModule]
        });
        testing_1.TestBed.overrideComponent(TestCarouselComponent, { set: { template: html } });
        fixture = testing_1.TestBed.createComponent(TestCarouselComponent);
        context = fixture.componentInstance;
        element = fixture.nativeElement.querySelector('#c1');
        clean = fixture.nativeElement.querySelector('#c2');
        fixture.detectChanges();
    });
    // beforeEach(fakeAsync(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    //   return tcb
    //     .overrideTemplate(TestCarouselComponent, html)
    //     .createAsync(TestCarouselComponent)
    //     .then((f:ComponentFixture<any>) => {
    //       fixture = f;
    //       context = fixture.componentInstance;
    //       fixture.detectChanges();
    //       element = fixture.nativeElement.querySelector('#c1');
    //       clean = fixture.nativeElement.querySelector('#c2');
    //       discardPeriodicTasks();
    //     });
    // })));
    it('should set first slide as active by default', function () {
        expectActiveSlides(element, [true, false, false]);
    });
    // TODO:
    xit('should be able to select a slide via model changes', function () {
        context.slides[2].active = true;
        fixture.detectChanges();
        expectActiveSlides(element, [false, false, true]);
    });
    it('should create next/prev nav button', function () {
        var prev = element.querySelectorAll('a.left');
        var next = element.querySelectorAll('a.right');
        expect(prev.length).toBe(1);
        expect(next.length).toBe(1);
    });
    it('should display slide indicators', function () {
        var indicators = element.querySelectorAll('ol.carousel-indicators > li');
        expect(indicators.length).toBe(3);
    });
    // TODO:
    xit('should hide navigation when only one slide', function () {
        context.slides.splice(0, 2);
        fixture.detectChanges();
        expect(context.slides.length).toBe(1);
        var indicators = element.querySelectorAll('ol.carousel-indicators > li');
        expect(indicators.length).toBe(0);
        var prev = element.querySelectorAll('a.left');
        expect(prev.length).toBe(0);
        var next = element.querySelectorAll('a.right');
        expect(next.length).toBe(0);
    });
    // TODO:
    xit('should disable prev button when slide index is 0 and noWrap is truthy', function () {
        context.noWrapSlides = true;
        fixture.detectChanges();
        var prev = element.querySelector('a.left');
        expect(prev.classList).toContain('disabled');
    });
    // TODO:
    xit('should disable next button when last slide is active and noWrap is truthy', function () {
        context.noWrapSlides = true;
        context.slides[2].active = true;
        fixture.detectChanges();
        var next = element.querySelector('a.right');
        expect(next.classList).toContain('disabled');
    });
    it('should change slide on indicator click', function () {
        var indicators = element.querySelectorAll('ol.carousel-indicators > li');
        expectActiveSlides(element, [true, false, false]);
        indicators[2].click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, false, true]);
        indicators[1].click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, true, false]);
    });
    it('should change slide on carousel control click', function () {
        var prev = element.querySelector('a.left');
        var next = element.querySelector('a.right');
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, true, false]);
        prev.click();
        fixture.detectChanges();
        expectActiveSlides(element, [true, false, false]);
    });
    // it('should change slide on time passage (default)', fakeAsync(() => {
    //   expectActiveSlides(clean, [true, false]);
    //   tick(6000);
    //   fixture.detectChanges();
    //   expectActiveSlides(clean, [false, true]);
    // }));
    it('should wrap slide changes by default', function () {
        var prev = element.querySelector('a.left');
        var next = element.querySelector('a.right');
        expectActiveSlides(element, [true, false, false]);
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, true, false]);
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, false, true]);
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [true, false, false]);
        prev.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, false, true]);
    });
    it('should not wrap slide changes if noWrap == true', function () {
        context.noWrapSlides = true;
        fixture.detectChanges();
        var prev = element.querySelector('a.left');
        var next = element.querySelector('a.right');
        expectActiveSlides(element, [true, false, false]);
        prev.click();
        fixture.detectChanges();
        expectActiveSlides(element, [true, false, false]);
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, true, false]);
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, false, true]);
        next.click();
        fixture.detectChanges();
        expectActiveSlides(element, [false, false, true]);
    });
});
var TestCarouselComponent = (function () {
    function TestCarouselComponent() {
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [
            { image: '//placekitten.com/600/300', text: 'slide0' },
            { image: '//placekitten.com/600/300', text: 'slide1' },
            { image: '//placekitten.com/600/300', text: 'slide2' }
        ];
    }
    TestCarouselComponent = __decorate([
        core_1.Component({
            selector: 'carousel-test',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], TestCarouselComponent);
    return TestCarouselComponent;
}());
//# sourceMappingURL=carousel.component.spec.js.map