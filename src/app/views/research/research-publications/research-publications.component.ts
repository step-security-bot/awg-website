import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PortalService } from '@awg-core/page/page-services/portal.service';

@Component({
    selector: 'awg-research-publications',
    templateUrl: './research-publications.component.html',
    styleUrls: ['./research-publications.component.css'],
})
export class ResearchPublicationsComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('rightPanelPortal') rightPanelPortal: TemplateRef<unknown>;

    bibBaseUrl: SafeResourceUrl;

    constructor(
        private _portalService: PortalService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this._sanitizeUrls();
    }

    ngAfterViewInit() {
        this._portalService.updateRightPanelPortalData(this.rightPanelPortal);
    }

    ngOnDestroy() {
        this._portalService.clearRightPanelPortalData();
    }

    private _sanitizeUrls(): void {
        this.bibBaseUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://bibbase.org/show?bib=https%3A%2F%2Fwww.anton-webern.ch%2Fassets%2Fdocuments%2FAWG.bib&authorFirst=1&nocache=1&theme=simple&css=1&jsonp=1'
        );
    }
}
