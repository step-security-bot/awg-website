import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebernComponent } from './webern.component';
import { WebernBibliographyComponent } from './webern-bibliography/webern-bibliography.component';
import { WebernChronologyComponent } from './webern-chronology/webern-chronology.component';
import { WebernLettersComponent } from './webern-letters/webern-letters.component';
import { WebernOverviewComponent } from './webern-overview/webern-overview.component';
import { WebernPersonsComponent } from './webern-persons/webern-persons.component';

const webernRoutes: Routes = [
    {
        path: 'webern',
        component: WebernComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'overview', component: WebernOverviewComponent },
                    { path: 'chronology', component: WebernChronologyComponent },
                    { path: 'letters', component: WebernLettersComponent },
                    { path: 'persons', component: WebernPersonsComponent },
                    { path: 'bibliography', component: WebernBibliographyComponent },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(webernRoutes)],
    exports: [RouterModule],
})
export class WebernRoutingModule {}

export const routedWebernComponents = [
    WebernComponent,
    WebernChronologyComponent,
    WebernLettersComponent,
    WebernOverviewComponent,
    WebernPersonsComponent,
];
