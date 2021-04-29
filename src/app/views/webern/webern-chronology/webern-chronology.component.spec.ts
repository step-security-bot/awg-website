import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebernChronologyComponent } from './webern-chronology.component';

describe('WebernChronologyComponent', () => {
    let component: WebernChronologyComponent;
    let fixture: ComponentFixture<WebernChronologyComponent>;
    const info = 'webern-chronology works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WebernChronologyComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernChronologyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'webern-chronology works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
