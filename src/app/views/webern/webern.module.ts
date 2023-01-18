import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-app/shared/shared.module';

import { routedWebernComponents, WebernRoutingModule } from './webern-routing.module';

@NgModule({
    imports: [SharedModule, WebernRoutingModule],
    declarations: [routedWebernComponents],
})
export class WebernModule {}
