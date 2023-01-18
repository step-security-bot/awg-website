import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactAddressComponent } from './contact-address/contact-address.component';
import { ContactCitationComponent } from './contact-citation/contact-citation.component';
import { ContactImprintComponent } from './contact-imprint/contact-imprint.component';
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
    {
        path: 'contact',
        component: ContactComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'address', component: ContactAddressComponent },
                    { path: 'imprint', component: ContactImprintComponent },
                    { path: 'citation', component: ContactCitationComponent },
                    { path: '', redirectTo: 'address', pathMatch: 'full' },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}

export const routedContactComponents = [
    ContactComponent,
    ContactAddressComponent,
    ContactImprintComponent,
    ContactCitationComponent,
];
