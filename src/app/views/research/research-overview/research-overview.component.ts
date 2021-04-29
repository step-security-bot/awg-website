import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-research-overview',
    templateUrl: './research-overview.component.html',
    styleUrls: ['./research-overview.component.css']
})
export class ResearchOverviewComponent implements AfterViewInit, OnDestroy {
    info = 'research-overview works!';

    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
