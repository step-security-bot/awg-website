import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionOverviewComponent } from './edition-overview.component';

describe('EditionOverviewComponent', () => {
    let component: EditionOverviewComponent;
    let fixture: ComponentFixture<EditionOverviewComponent>;
    const info = 'edition-overview works!';

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditionOverviewComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'edition-overview works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
