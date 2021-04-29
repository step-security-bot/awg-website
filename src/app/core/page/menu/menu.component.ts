import { Component, Input } from '@angular/core';

import { Menu } from '@awg-core/page/page-models/menu.model';

@Component({
    selector: 'awg-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input()
    menuArray: Menu[];

    constructor() {}
}
