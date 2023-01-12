import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-app/shared/shared.module';

import { ResearchRoutingModule, routedResearchComponents } from './research-routing.module';

@NgModule({
    imports: [SharedModule, ResearchRoutingModule],
    declarations: [routedResearchComponents],
})
export class ResearchModule {}
