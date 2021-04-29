import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebernComponent } from './webern.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WebernComponent', () => {
    let component: WebernComponent;
    let fixture: ComponentFixture<WebernComponent>;
    const info = 'webern works!';

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [WebernComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WebernComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as status info 'webern works!'`, () => {
        expect(component.info).toEqual(info);
    });

    it('should render status info in a p-tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(info);
    });
});
