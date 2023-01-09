import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchWebernLecturesComponent } from './research-webern-lectures.component';

describe('ResearchWebernLecturesComponent', () => {
    let component: ResearchWebernLecturesComponent;
    let fixture: ComponentFixture<ResearchWebernLecturesComponent>;
    const info = 'research-webern-lectures works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ResearchWebernLecturesComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchWebernLecturesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
