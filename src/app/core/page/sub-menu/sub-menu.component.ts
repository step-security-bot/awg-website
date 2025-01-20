import { Component, input } from '@angular/core';

import { Menu } from '@awg-core/page/page-models/menu.model';

@Component({
    selector: 'awg-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.css'],
    standalone: false,
})
export class SubMenuComponent {
    selectedMenu = input.required<Menu>();

    constructor() {}
}
