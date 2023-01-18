import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-app/shared/shared.module';

import { ContactRoutingModule, routedContactComponents } from './contact-routing.module';

@NgModule({
    imports: [SharedModule, ContactRoutingModule],
    declarations: [routedContactComponents],
})
export class ContactModule {}
