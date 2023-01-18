import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditionComponent } from './edition.component';
import { EditionOnlineComponent } from './edition-online/edition-online.component';
import { EditionOutlineComponent } from './edition-outline/edition-outline.component';
import { EditionOverviewComponent } from './edition-overview/edition-overview.component';
import { EditionPrintComponent } from './edition-print/edition-print.component';

const editionRoutes: Routes = [
    {
        path: 'edition',
        component: EditionComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'overview', component: EditionOverviewComponent },
                    { path: 'outline', component: EditionOutlineComponent },
                    { path: 'print', component: EditionPrintComponent },
                    { path: 'online', component: EditionOnlineComponent },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(editionRoutes)],
    exports: [RouterModule],
})
export class EditionRoutingModule {}

export const routedEditionComponents = [
    EditionComponent,
    EditionOnlineComponent,
    EditionOutlineComponent,
    EditionOverviewComponent,
    EditionPrintComponent,
];
