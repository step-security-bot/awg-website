import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { ProjectCooperationsComponent } from './project-cooperations/project-cooperations.component';
import { ProjectNewsArchiveComponent } from './project-news-archive/project-news-archive.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectTeamComponent } from './project-team/project-team.component';

const projectRoutes: Routes = [
    {
        path: 'project',
        component: ProjectComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'overview', component: ProjectOverviewComponent },
                    { path: 'team', component: ProjectTeamComponent },
                    { path: 'board', component: ProjectBoardComponent },
                    { path: 'cooperations', component: ProjectCooperationsComponent },
                    { path: 'news-archive', component: ProjectNewsArchiveComponent },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(projectRoutes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}

export const routedProjectComponents = [
    ProjectComponent,
    ProjectBoardComponent,
    ProjectCooperationsComponent,
    ProjectNewsArchiveComponent,
    ProjectOverviewComponent,
    ProjectTeamComponent
];
