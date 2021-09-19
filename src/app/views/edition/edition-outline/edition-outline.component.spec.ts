import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionOutlineComponent } from './edition-outline.component';

describe('EditionOutlineComponent', () => {
    let component: EditionOutlineComponent;
    let fixture: ComponentFixture<EditionOutlineComponent>;
    const info = 'edition-outline works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EditionOutlineComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOutlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'edition-outline works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
