import { AfterViewInit, ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';

import { Menu } from './page-models/menu.model';
import { PortalService } from './page-services/portal.service';

@Component({
    selector: 'awg-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
})
export class PageComponent implements AfterViewInit {
    @Input()
    menuArray: Menu[];
    @Input()
    selectedMenu: Menu;

    rightPanelPortal: TemplateRef<unknown>;

    constructor(private _portalService: PortalService, private cdRef: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this._portalService.getRightPanelPortalData().subscribe((ref: TemplateRef<unknown>) => {
            this.rightPanelPortal = ref;

            this.cdRef.detectChanges();
        });
    }
}
