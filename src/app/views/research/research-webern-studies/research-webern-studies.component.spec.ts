import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchWebernStudiesComponent } from './research-webern-studies.component';

describe('ResearchWebernStudiesComponent', () => {
    let component: ResearchWebernStudiesComponent;
    let fixture: ComponentFixture<ResearchWebernStudiesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ResearchWebernStudiesComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchWebernStudiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
