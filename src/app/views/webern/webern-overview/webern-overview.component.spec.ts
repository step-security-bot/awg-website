import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { WebernOverviewComponent } from './webern-overview.component';

describe('WebernOverviewComponent', () => {
    let component: WebernOverviewComponent;
    let fixture: ComponentFixture<WebernOverviewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WebernOverviewComponent, RouterLinkStubDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
