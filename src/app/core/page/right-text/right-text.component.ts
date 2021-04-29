import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    Input, OnChanges,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
    selector: 'awg-right-text',
    templateUrl: './right-text.component.html',
    styleUrls: ['./right-text.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class RightTextComponent implements AfterViewInit {
    @Input() rightTextPortal: TemplateRef<unknown> ;

    templatePortal: TemplatePortal<unknown>;

    constructor(private _viewContainerRef: ViewContainerRef, private cdRef: ChangeDetectorRef) {}

    ngAfterViewInit() {
        if (!this.rightTextPortal) return;

        this.templatePortal = new TemplatePortal(
            this.rightTextPortal,
            this._viewContainerRef
        );
        this.cdRef.detectChanges();
    }

}
