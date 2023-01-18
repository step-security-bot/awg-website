import { Component } from '@angular/core';

@Component({
    selector: 'awg-locale-switcher',
    templateUrl: './locale-switcher.component.html',
    styleUrls: ['./locale-switcher.component.css'],
})
export class LocaleSwitcherComponent {
    locales = [
        { code: 'de', label: 'Deutsch' },
        { code: 'en', label: 'English' },
    ];
}
