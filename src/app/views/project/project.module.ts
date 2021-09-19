import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-shared/shared.module';

import { ProjectRoutingModule, routedProjectComponents } from './project-routing.module';

@NgModule({
    imports: [SharedModule, ProjectRoutingModule],
    declarations: [routedProjectComponents],
})
export class ProjectModule {}
