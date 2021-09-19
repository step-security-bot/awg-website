import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule, routedWorksComponents } from './works-routing.module';

@NgModule({
    imports: [CommonModule, WorksRoutingModule],
    declarations: [routedWorksComponents],
})
export class WorksModule {}
