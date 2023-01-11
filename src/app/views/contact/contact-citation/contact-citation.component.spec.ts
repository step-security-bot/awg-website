import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCitationComponent } from './contact-citation.component';

describe('ContactCitationComponent', () => {
    let component: ContactCitationComponent;
    let fixture: ComponentFixture<ContactCitationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactCitationComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactCitationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
