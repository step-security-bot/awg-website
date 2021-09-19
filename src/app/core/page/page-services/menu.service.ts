import { Injectable } from '@angular/core';

import { Menu } from '@awg-core/page/page-models/menu.model';
import { MENUDATA } from '@awg-core/page//page-data/menu-data';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    constructor() {}

    getMenuArray(): Menu[] {
        return MENUDATA;
    }

    getActiveMenu(menuArray: Menu[], path?: string) {
        let activeMenu: Menu;
        const home = '/project';
        const re = /(\/[\w:]+)/;
        const url: string = path ? path : home;
        // Extract single paths via regex and filter empty results
        const splitUrl: string[] = url.split(re).filter(n => n);
        // Get first path
        const activeRoot: string = splitUrl[0] !== '' ? splitUrl[0] : splitUrl[1];
        // Find this path in menu to identify the active menu
        menuArray.forEach(menu => {
            if (menu.linkTo === activeRoot) {
                activeMenu = menu;
            }
        });
        return activeMenu;
    }
}
