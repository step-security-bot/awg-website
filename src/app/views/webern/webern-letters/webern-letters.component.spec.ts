import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebernLettersComponent } from './webern-letters.component';

describe('WebernCorrespondenceComponent', () => {
    let component: WebernLettersComponent;
    let fixture: ComponentFixture<WebernLettersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WebernLettersComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernLettersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
