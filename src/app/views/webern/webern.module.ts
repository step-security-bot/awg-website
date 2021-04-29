import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebernRoutingModule, routedWebernComponents } from './webern-routing.module';

@NgModule({
    imports: [CommonModule, WebernRoutingModule],
    declarations: [routedWebernComponents]
})
export class WebernModule {}
