import { Component, input } from '@angular/core';

import { Menu } from '@awg-core/page/page-models/menu.model';

@Component({
    selector: 'awg-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: false,
})
export class MenuComponent {
    menuArray = input.required<Menu[]>();

    constructor() {}
}
