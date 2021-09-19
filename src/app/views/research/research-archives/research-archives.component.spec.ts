import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchArchivesComponent } from './research-archives.component';

describe('ResearchArchivesComponent', () => {
    let component: ResearchArchivesComponent;
    let fixture: ComponentFixture<ResearchArchivesComponent>;
    const info = 'research-archive works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchArchivesComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchArchivesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'research-archive works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
