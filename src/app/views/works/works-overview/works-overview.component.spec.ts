import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { WorksOverviewComponent } from './works-overview.component';

describe('WorksOverviewComponent', () => {
    let component: WorksOverviewComponent;
    let fixture: ComponentFixture<WorksOverviewComponent>;
    const info = 'works-overview works!';

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WorksOverviewComponent, RouterLinkStubDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorksOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
