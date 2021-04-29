import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule, routedResearchComponents } from './research-routing.module';

@NgModule({
    imports: [CommonModule, ResearchRoutingModule],
    declarations: [routedResearchComponents]
})
export class ResearchModule {}
