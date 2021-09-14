import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebernRoutingModule, routedWebernComponents } from './webern-routing.module';
import { WebernBibliographyComponent } from './webern-bibliography/webern-bibliography.component';

@NgModule({
    imports: [CommonModule, WebernRoutingModule],
    declarations: [routedWebernComponents, WebernBibliographyComponent],
})
export class WebernModule {}
