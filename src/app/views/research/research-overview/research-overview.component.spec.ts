import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { ResearchOverviewComponent } from './research-overview.component';

describe('ResearchOverviewComponent', () => {
    let component: ResearchOverviewComponent;
    let fixture: ComponentFixture<ResearchOverviewComponent>;
    const info = 'research-overview works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchOverviewComponent, RouterLinkStubDirective],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
