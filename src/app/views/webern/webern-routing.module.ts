import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebernComponent } from './webern.component';
import { WebernChronologyComponent } from './webern-chronology/webern-chronology.component';
import { WebernCorrespondenceComponent } from './webern-correspondence/webern-correspondence.component';
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
                    { path: 'correspondence', component: WebernCorrespondenceComponent },
                    { path: 'persons', component: WebernPersonsComponent },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(webernRoutes)],
    exports: [RouterModule]
})
export class WebernRoutingModule {}

export const routedWebernComponents = [
    WebernComponent,
    WebernChronologyComponent,
    WebernCorrespondenceComponent,
    WebernOverviewComponent,
    WebernPersonsComponent
];
