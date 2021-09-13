import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-webern-persons',
    templateUrl: './webern-persons.component.html',
    styleUrls: ['./webern-persons.component.css'],
})
export class WebernPersonsComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    info = 'webern-persons works!';

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
