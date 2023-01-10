import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionOverviewComponent } from './edition-overview.component';

describe('EditionOverviewComponent', () => {
    let component: EditionOverviewComponent;
    let fixture: ComponentFixture<EditionOverviewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditionOverviewComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
