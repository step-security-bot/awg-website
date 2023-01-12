import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { WebernChronologyComponent } from './webern-chronology.component';

describe('WebernChronologyComponent', () => {
    let component: WebernChronologyComponent;
    let fixture: ComponentFixture<WebernChronologyComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WebernChronologyComponent, RouterLinkStubDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernChronologyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
