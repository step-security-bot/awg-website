import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { ProjectCooperationsComponent } from './project-cooperations.component';

describe('ProjectCooperationsComponent', () => {
    let component: ProjectCooperationsComponent;
    let fixture: ComponentFixture<ProjectCooperationsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ProjectCooperationsComponent, RouterLinkStubDirective],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectCooperationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
