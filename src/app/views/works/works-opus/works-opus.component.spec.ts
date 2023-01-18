import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorksOpusComponent } from './works-opus.component';

describe('WorksOpusComponent', () => {
    let component: WorksOpusComponent;
    let fixture: ComponentFixture<WorksOpusComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WorksOpusComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorksOpusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
