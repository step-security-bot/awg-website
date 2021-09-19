import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchOverviewComponent } from './research-overview.component';

describe('ResearchOverviewComponent', () => {
    let component: ResearchOverviewComponent;
    let fixture: ComponentFixture<ResearchOverviewComponent>;
    const info = 'research-overview works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchOverviewComponent],
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

    it(`should have as status info 'research-overview works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
