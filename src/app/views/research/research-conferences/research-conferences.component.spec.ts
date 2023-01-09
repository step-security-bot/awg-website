import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchConferencesComponent } from './research-conferences.component';

describe('ResearchConferencesComponent', () => {
    let component: ResearchConferencesComponent;
    let fixture: ComponentFixture<ResearchConferencesComponent>;
    const info = 'research-conferences works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchConferencesComponent],
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
});
