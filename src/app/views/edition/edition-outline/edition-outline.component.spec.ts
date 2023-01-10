import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionOutlineComponent } from './edition-outline.component';

describe('EditionOutlineComponent', () => {
    let component: EditionOutlineComponent;
    let fixture: ComponentFixture<EditionOutlineComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditionOutlineComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOutlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
