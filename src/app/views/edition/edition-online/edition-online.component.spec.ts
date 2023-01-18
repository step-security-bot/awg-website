import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionOnlineComponent } from './edition-online.component';

describe('EditionOnlineComponent', () => {
    let component: EditionOnlineComponent;
    let fixture: ComponentFixture<EditionOnlineComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditionOnlineComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOnlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
