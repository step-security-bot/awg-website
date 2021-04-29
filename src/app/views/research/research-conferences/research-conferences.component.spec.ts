import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchConferencesComponent } from './research-conferences.component';

describe('ResearchConferencesComponent', () => {
    let component: ResearchConferencesComponent;
    let fixture: ComponentFixture<ResearchConferencesComponent>;
    const info = 'research-conferences works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchConferencesComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchConferencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'research-conferences works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
