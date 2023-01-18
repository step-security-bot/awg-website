import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchActivitiesComponent } from './research-activities.component';

describe('ResearchActivitiesComponent', () => {
    let component: ResearchActivitiesComponent;
    let fixture: ComponentFixture<ResearchActivitiesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ResearchActivitiesComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchActivitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
