import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionPrintComponent } from './edition-print.component';

describe('EditionPrintComponent', () => {
    let component: EditionPrintComponent;
    let fixture: ComponentFixture<EditionPrintComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditionPrintComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionPrintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
