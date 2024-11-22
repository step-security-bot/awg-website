import { AfterViewInit, Component, OnDestroy, TemplateRef, viewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-project-overview',
    templateUrl: './project-overview.component.html',
    styleUrls: ['./project-overview.component.css'],
    standalone: false,
})
export class ProjectOverviewComponent implements AfterViewInit, OnDestroy {
    readonly rightPanelPortal = viewChild<TemplateRef<unknown>>('rightPanelPortal');

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal());
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
