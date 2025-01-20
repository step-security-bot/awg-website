import { Component } from '@angular/core';

@Component({
    selector: 'awg-corner-ribbon',
    templateUrl: './corner-ribbon.component.html',
    styleUrls: ['./corner-ribbon.component.css'],
    standalone: false,
})
export class CornerRibbonComponent {
    cornerRibbonLabel = 'beta';
    cornerRibbonLink = 'https://github.com/webern-unibas-ch/awg-website/';

    constructor() {
        // Intentionally empty
    }
}
