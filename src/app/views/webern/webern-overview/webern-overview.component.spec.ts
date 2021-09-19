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

    it(`should have as status info 'webern-overview works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
