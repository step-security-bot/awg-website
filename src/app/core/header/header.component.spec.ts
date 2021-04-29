import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { RouterLinkStubDirective } from '../../../testing/router-link-stub.directive';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let linkDes;
    let routerLinks;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [HeaderComponent, RouterLinkStubDirective]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        // trigger initial data binding
        fixture.detectChanges();

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

        // get attached link directive instances
        // using each DebugElement's injector
        routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('can get routerLink from template', () => {
        expect(routerLinks.length).toBe(1, 'should have 1 routerLink');
        expect(routerLinks[0].routerLink[0]).toBe('/contact');
    });

    it('can click contact link in template', () => {
        const contactLinkDe = linkDes[0]; // contact link DebugElement
        const contactLink = routerLinks[0]; // contact link directive

        expect(contactLink.navigatedTo).toBeNull('should not have navigated yet');

        contactLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(contactLink.navigatedTo[0]).toBe('/contact');
    });
});
