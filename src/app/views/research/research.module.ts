import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule, routedResearchComponents } from './research-routing.module';
import { ResearchPublicationsComponent } from './research-publications/research-publications.component';

@NgModule({
    imports: [CommonModule, ResearchRoutingModule],
    declarations: [routedResearchComponents, ResearchPublicationsComponent],
})
export class ResearchModule {}
