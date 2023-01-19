import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'awg-corner-ribbon',
    templateUrl: './corner-ribbon.component.html',
    styleUrls: ['./corner-ribbon.component.css'],
})
export class CornerRibbonComponent implements OnInit {
    cornerRibbonLabel = 'beta';
    cornerRibbonLink = 'https://github.com/webern-unibas-ch/awg-website/';

    constructor() {}

    ngOnInit() {}
}
