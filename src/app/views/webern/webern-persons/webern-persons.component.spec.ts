import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebernPersonsComponent } from './webern-persons.component';

describe('WebernPersonsComponent', () => {
    let component: WebernPersonsComponent;
    let fixture: ComponentFixture<WebernPersonsComponent>;
    const info = 'webern-persons works!';

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WebernPersonsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernPersonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
