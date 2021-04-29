import { AfterViewInit, ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';

import { Menu } from './page-models/menu.model';
import { PortalService } from './page-services/portal.service';

@Component({
    selector: 'awg-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements AfterViewInit {
    @Input()
    menuArray: Menu[];
    @Input()
    selectedMenu: Menu;

    rightTextPortal: TemplateRef<unknown>;

    constructor(private portalService: PortalService, private cdRef: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.portalService.getRightTextPortalData().subscribe((ref: TemplateRef<unknown>) => {
            this.rightTextPortal = ref;

            this.cdRef.detectChanges();
        });
    }
}
