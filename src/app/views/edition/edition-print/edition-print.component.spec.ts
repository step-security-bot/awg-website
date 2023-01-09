import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionPrintComponent } from './edition-print.component';

describe('EditionPrintComponent', () => {
    let component: EditionPrintComponent;
    let fixture: ComponentFixture<EditionPrintComponent>;
    const info = 'edition-print works!';

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EditionPrintComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionPrintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'edition-print works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
