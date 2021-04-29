import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-project-overview',
    templateUrl: './project-overview.component.html',
    styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rightTextPortal') rightTextPortal: TemplateRef<unknown>;

    constructor(private portalService: PortalService) {}

    ngAfterViewInit () {
        this.portalService.updateRightTextPortalData(this.rightTextPortal);
    }

    ngOnDestroy () {
        this.portalService.clearRightTextPortalData();
    }


}
