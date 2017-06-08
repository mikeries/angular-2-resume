import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from './Angular2UI/collapse/collapse.module';
import { ProgressbarModule } from './Angular2UI/progressbar/progressbar.module';
import { AccordionModule } from './Angular2UI/accordion/accordion.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { ProjectsComponent } from './projects.component';
import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CollapseModule,
        ProgressbarModule,
        AccordionModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ExperienceComponent,
        EducationComponent
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }
