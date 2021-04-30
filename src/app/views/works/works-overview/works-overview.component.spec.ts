import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorksOverviewComponent } from './works-overview.component';

describe('WorksOverviewComponent', () => {
    let component: WorksOverviewComponent;
    let fixture: ComponentFixture<WorksOverviewComponent>;
    const info = 'works-overview works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WorksOverviewComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WorksOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
