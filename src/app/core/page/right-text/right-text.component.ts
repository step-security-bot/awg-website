import { TemplatePortal } from '@angular/cdk/portal';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    TemplateRef,
    ViewContainerRef,
    input,
} from '@angular/core';

@Component({
    selector: 'awg-right-text',
    templateUrl: './right-text.component.html',
    styleUrls: ['./right-text.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: false,
})
export class RightTextComponent implements AfterViewInit {
    readonly rightPanelPortal = input<TemplateRef<unknown>>(undefined);

    templatePortal: TemplatePortal<unknown>;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private cdRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit() {
        const rightPanelPortal = this.rightPanelPortal();
        if (!rightPanelPortal) {
            return;
        }

        this.templatePortal = new TemplatePortal(rightPanelPortal, this.viewContainerRef);
        this.cdRef.detectChanges();
    }
}
