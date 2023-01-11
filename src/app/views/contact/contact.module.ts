import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactRoutingModule, routedContactComponents } from './contact-routing.module';

@NgModule({
    imports: [CommonModule, ContactRoutingModule],
    declarations: [routedContactComponents],
})
export class ContactModule {}
