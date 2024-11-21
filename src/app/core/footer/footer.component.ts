import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'awg-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false,
})
export class FooterComponent implements OnInit {
    now = new Date().getFullYear();

    constructor() {}

    ngOnInit() {}
}
