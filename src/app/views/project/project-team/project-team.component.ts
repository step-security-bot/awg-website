import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-project-team',
    templateUrl: './project-team.component.html',
    styleUrls: ['./project-team.component.css'],
})
export class ProjectTeamComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    info = 'project-team works!';

    constructor(private _portalService: PortalService) {}

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }
}
