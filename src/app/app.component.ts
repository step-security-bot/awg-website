import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { Menu } from '@awg-core/page/page-models/menu.model';
import { MenuService } from '@awg-core/page/page-services/menu.service';

@Component({
    selector: 'awg-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    selectedMenu: Menu;
    menuArray: Menu[];

    constructor(private menuService: MenuService, private router: Router) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(event => {
                const urlAfterRedirectsKey = 'urlAfterRedirects';
                const path = event[urlAfterRedirectsKey];
                this.provideActiveMenu(path);
            });
    }

    ngOnInit() {
        this.provideMenu();
    }

    provideMenu(): void {
        this.menuArray = this.menuService.getMenuArray();
        this.provideActiveMenu();
    }

    provideActiveMenu(path?: string): void {
        this.selectedMenu = this.menuService.getActiveMenu(this.menuArray, path);
    }
}
