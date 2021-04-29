import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResearchComponent } from './research.component';
import { ResearchActivitiesComponent } from './research-activities/research-activities.component';
import { ResearchArchivesComponent } from './research-archives/research-archives.component';
import { ResearchConferencesComponent } from './research-conferences/research-conferences.component';
import { ResearchOverviewComponent } from './research-overview/research-overview.component';
import { ResearchWebernLecturesComponent } from './research-webern-lectures/research-webern-lectures.component';
import { ResearchWebernStudiesComponent } from './research-webern-studies/research-webern-studies.component';

const researchRoutes: Routes = [
    {
        path: 'research',
        component: ResearchComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'overview', component: ResearchOverviewComponent },
                    { path: 'studies', component: ResearchWebernStudiesComponent },
                    { path: 'lectures', component: ResearchWebernLecturesComponent },
                    { path: 'conferences', component: ResearchConferencesComponent },
                    { path: 'archives', component: ResearchArchivesComponent },
                    { path: 'activities', component: ResearchActivitiesComponent },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(researchRoutes)],
    exports: [RouterModule]
})
export class ResearchRoutingModule {}

export const routedResearchComponents = [
    ResearchComponent,
    ResearchActivitiesComponent,
    ResearchArchivesComponent,
    ResearchConferencesComponent,
    ResearchOverviewComponent,
    ResearchWebernLecturesComponent,
    ResearchWebernStudiesComponent
];
