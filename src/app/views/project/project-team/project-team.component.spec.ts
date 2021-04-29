import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectTeamComponent } from './project-team.component';

describe('ProjectTeamComponent', () => {
    let component: ProjectTeamComponent;
    let fixture: ComponentFixture<ProjectTeamComponent>;
    const info = 'project-team works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ProjectTeamComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectTeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'project-team works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
