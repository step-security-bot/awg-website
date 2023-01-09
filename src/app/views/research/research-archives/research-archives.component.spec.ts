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
});
