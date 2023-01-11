import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactImprintComponent } from './contact-imprint.component';

describe('ContactImprintComponent', () => {
    let component: ContactImprintComponent;
    let fixture: ComponentFixture<ContactImprintComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactImprintComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactImprintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
