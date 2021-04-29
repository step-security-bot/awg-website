import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorksMoldenhauerComponent } from './works-moldenhauer.component';

describe('WorksMoldenhauerComponent', () => {
    let component: WorksMoldenhauerComponent;
    let fixture: ComponentFixture<WorksMoldenhauerComponent>;
    const info = 'works-moldenhauer works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WorksMoldenhauerComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WorksMoldenhauerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'works-moldenhauer works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
