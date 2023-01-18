import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebernBibliographyComponent } from './webern-bibliography.component';

describe('WebernBibliographyComponent', () => {
    let component: WebernBibliographyComponent;
    let fixture: ComponentFixture<WebernBibliographyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WebernBibliographyComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernBibliographyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
