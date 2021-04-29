import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-webern-correspondence',
    templateUrl: './webern-correspondence.component.html',
    styleUrls: ['./webern-correspondence.component.css']
})
export class WebernCorrespondenceComponent implements AfterViewInit, OnDestroy {
    info = 'webern-correspondence works!';

    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
