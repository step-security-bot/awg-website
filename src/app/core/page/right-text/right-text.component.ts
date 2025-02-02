import { TemplatePortal } from '@angular/cdk/portal';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'awg-right-text',
    templateUrl: './right-text.component.html',
    styleUrls: ['./right-text.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class RightTextComponent implements AfterViewInit {
    @Input() rightPanelPortal: TemplateRef<unknown>;

    templatePortal: TemplatePortal<unknown>;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private cdRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit() {
        if (!this.rightPanelPortal) {
            return;
        }

        this.templatePortal = new TemplatePortal(this.rightPanelPortal, this.viewContainerRef);
        this.cdRef.detectChanges();
    }
}
