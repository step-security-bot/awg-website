import { AfterViewInit, Component, OnDestroy, TemplateRef, viewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-webern-bibliography',
    templateUrl: './webern-bibliography.component.html',
    styleUrls: ['./webern-bibliography.component.css'],
    standalone: false,
})
export class WebernBibliographyComponent implements AfterViewInit, OnDestroy {
    readonly rightPanelPortal = viewChild<TemplateRef<unknown>>('rightPanelPortal');

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal());
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
