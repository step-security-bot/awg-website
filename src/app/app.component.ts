import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { Menu } from '@awg-core/page/page-models/menu.model';
import { MenuService } from '@awg-core/page/page-services/menu.service';

@Component({
    selector: 'awg-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent implements OnInit {
    menuArray: Menu[];
    selectedMenu: Menu;

    private readonly _menuService = inject(MenuService);
    private readonly _router = inject(Router);

    constructor() {
        this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
            const urlAfterRedirectsKey = 'urlAfterRedirects';
            const path = event[urlAfterRedirectsKey];

            this.provideActiveMenu(path);
        });
    }

    ngOnInit() {
        this.provideMenu();
    }

    provideMenu(): void {
        this.menuArray = this._menuService.getMenuArray();
    }

    provideActiveMenu(path?: string): void {
        this.selectedMenu = this._menuService.getActiveMenu(this.menuArray, path);
    }
}
