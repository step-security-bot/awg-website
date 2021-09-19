import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    const title = 'Page not found';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PageNotFoundComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'Page not found'`, () => {
        expect(component.title).toEqual(title);
    });

    it('should render title in a h2-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain(title);
    });
});
