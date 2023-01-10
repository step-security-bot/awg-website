import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-app/shared/shared.module';

import { EditionRoutingModule, routedEditionComponents } from './edition-routing.module';

@NgModule({
    imports: [CommonModule, EditionRoutingModule, SharedModule],
    declarations: [routedEditionComponents],
})
export class EditionModule {}
