import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNewsArchiveComponent } from './project-news-archive.component';

describe('ProjectNewsArchiveComponent', () => {
    let component: ProjectNewsArchiveComponent;
    let fixture: ComponentFixture<ProjectNewsArchiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectNewsArchiveComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectNewsArchiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
