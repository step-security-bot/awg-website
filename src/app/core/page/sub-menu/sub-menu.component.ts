import { Component, Input } from '@angular/core';

import { Menu } from '@awg-core/page/page-models/menu.model';

@Component({
    selector: 'awg-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent {
    @Input()
    selectedMenu: Menu;

    constructor() {}
}
