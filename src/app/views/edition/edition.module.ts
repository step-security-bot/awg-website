import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionRoutingModule, routedEditionComponents } from './edition-routing.module';

@NgModule({
    imports: [CommonModule, EditionRoutingModule],
    declarations: [routedEditionComponents],
})
export class EditionModule {}
