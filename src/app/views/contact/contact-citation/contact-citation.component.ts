import { Component } from '@angular/core';

@Component({
    selector: 'awg-contact-citation',
    templateUrl: './contact-citation.component.html',
    styleUrls: ['./contact-citation.component.css'],
    standalone: false,
})
export class ContactCitationComponent {
    leftCB = '{{';
    rightCB = '}}';
}
