import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-app/shared/shared.module';

import { routedWorksComponents, WorksRoutingModule } from './works-routing.module';

@NgModule({
    imports: [SharedModule, WorksRoutingModule],
    declarations: [routedWorksComponents],
})
export class WorksModule {}
