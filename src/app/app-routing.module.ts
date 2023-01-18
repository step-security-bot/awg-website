import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [PageNotFoundComponent];
