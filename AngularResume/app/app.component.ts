import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.html'
})

export class AppComponent implements OnInit {
    public isCollapsed: boolean = true;
    public navIsFixed: boolean = false;

    constructor( @Inject(DOCUMENT) private document: Document) { }

    ngOnInit() { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        let number = this.document.body.scrollTop;
        if (number > 55) {
            this.navIsFixed = true;
        } else if (this.navIsFixed && number < 50) {
            this.navIsFixed = false;
        }
    }

    // TODO: Implement smooth scrolling
    scrollToTop() {
        this.document.body.scrollTop = 0;
    }

}
