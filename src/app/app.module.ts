import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core/core.module';
import { ContactModule } from './views/contact/contact.module';
import { EditionModule } from './views/edition/edition.module';
import { ProjectModule } from './views/project/project.module';
import { ResearchModule } from './views/research/research.module';
import { WebernModule } from './views/webern/webern.module';
import { WorksModule } from './views/works/works.module';

@NgModule({
    declarations: [AppComponent, routedComponents],
    imports: [
        BrowserModule,
        HttpClientModule,

        SharedModule,

        CoreModule,
        ContactModule,
        EditionModule,
        ProjectModule,
        ResearchModule,
        WebernModule,
        WorksModule,

        AppRoutingModule, // Has to be last routed Module
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
