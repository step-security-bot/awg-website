import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-edition-outline',
    templateUrl: './edition-outline.component.html',
    styleUrls: ['./edition-outline.component.css'],
})
export class EditionOutlineComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    info = 'edition-outline works!';

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
