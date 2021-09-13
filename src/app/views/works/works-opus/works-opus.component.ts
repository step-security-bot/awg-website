import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-works-opus',
    templateUrl: './works-opus.component.html',
    styleUrls: ['./works-opus.component.css'],
})
export class WorksOpusComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    info = 'works-opus works!';

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
