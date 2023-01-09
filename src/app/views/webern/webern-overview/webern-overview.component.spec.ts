import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebernOverviewComponent } from './webern-overview.component';

describe('WebernOverviewComponent', () => {
    let component: WebernOverviewComponent;
    let fixture: ComponentFixture<WebernOverviewComponent>;
    const info = 'webern-overview works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WebernOverviewComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
