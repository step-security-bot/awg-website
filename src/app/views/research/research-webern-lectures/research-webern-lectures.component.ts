import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-research-webern-lectures',
    templateUrl: './research-webern-lectures.component.html',
    styleUrls: ['./research-webern-lectures.component.css']
})
export class ResearchWebernLecturesComponent implements AfterViewInit, OnDestroy {
    info = 'research-webern-lectures works!';

    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
