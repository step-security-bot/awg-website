import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebernLettersComponent } from './webern-letters.component';

describe('WebernCorrespondenceComponent', () => {
    let component: WebernLettersComponent;
    let fixture: ComponentFixture<WebernLettersComponent>;
    const info = 'webern-correspondence works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WebernLettersComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernLettersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'webern-correspondence works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
