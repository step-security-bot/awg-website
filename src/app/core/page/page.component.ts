import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, input } from '@angular/core';

import { Menu } from './page-models/menu.model';
import { PortalService } from './page-services/portal.service';

@Component({
    selector: 'awg-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
    standalone: false,
})
export class PageComponent implements AfterViewInit {
    menuArray = input<Menu[]>(undefined);
    selectedMenu = input<Menu>(undefined);

    rightPanelPortal: TemplateRef<unknown>;

    constructor(
        private _portalService: PortalService,
        private _cdRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit() {
        this._portalService.getRightPanelPortalData().subscribe((ref: TemplateRef<unknown>) => {
            this.rightPanelPortal = ref;

            this._cdRef.detectChanges();
        });
    }
}
