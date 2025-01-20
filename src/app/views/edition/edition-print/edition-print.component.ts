import { AfterViewInit, Component, OnDestroy, TemplateRef, viewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-edition-print',
    templateUrl: './edition-print.component.html',
    styleUrls: ['./edition-print.component.css'],
    standalone: false,
})
export class EditionPrintComponent implements AfterViewInit, OnDestroy {
    rightPanelPortal = viewChild<TemplateRef<unknown>>('rightPanelPortal');

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal());
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
