import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CornerRibbonComponent } from './corner-ribbon.component';

describe('CornerRibbonComponent', () => {
    let component: CornerRibbonComponent;
    let fixture: ComponentFixture<CornerRibbonComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CornerRibbonComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CornerRibbonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
