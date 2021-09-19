import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './works.component';
import { WorksMoldenhauerComponent } from './works-moldenhauer/works-moldenhauer.component';
import { WorksOpusComponent } from './works-opus/works-opus.component';
import { WorksOverviewComponent } from './works-overview/works-overview.component';

const worksRoutes: Routes = [
    {
        path: 'works',
        component: WorksComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'overview', component: WorksOverviewComponent },
                    { path: 'opus', component: WorksOpusComponent },
                    { path: 'moldenhauer', component: WorksMoldenhauerComponent },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(worksRoutes)],
    exports: [RouterModule],
})
export class WorksRoutingModule {}

export const routedWorksComponents = [
    WorksComponent,
    WorksOverviewComponent,
    WorksOpusComponent,
    WorksMoldenhauerComponent,
];
