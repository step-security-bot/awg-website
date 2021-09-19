import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchActivitiesComponent } from './research-activities.component';

describe('ResearchActivitiesComponent', () => {
    let component: ResearchActivitiesComponent;
    let fixture: ComponentFixture<ResearchActivitiesComponent>;
    const info = 'research-activities works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchActivitiesComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchActivitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'research-activities works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
