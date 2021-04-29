import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditionOnlineComponent } from './edition-online.component';

describe('EditionOnlineComponent', () => {
    let component: EditionOnlineComponent;
    let fixture: ComponentFixture<EditionOnlineComponent>;
    const info = 'edition-online works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EditionOnlineComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionOnlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'edition-online works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
