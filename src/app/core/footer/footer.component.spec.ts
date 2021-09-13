import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';
import { RouterLinkStubDirective } from '../../../testing/router-link-stub.directive';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let linkDes;
    let routerLinks;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [FooterComponent, RouterLinkStubDirective],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;

        // Trigger initial data binding
        fixture.detectChanges();

        // Find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

        // Get attached link directive instances
        // Using each DebugElement's injector
        routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('can get routerLink from template', () => {
        expect(routerLinks.length).toBe(1, 'should have 1 routerLink');
        expect(routerLinks[0].routerLink[0]).toBe('/contact');
    });

    it('can click Contact link in template', () => {
        const contactLinkDe = linkDes[0]; // Contact link DebugElement
        const contactLink = routerLinks[0]; // Contact link directive

        expect(contactLink.navigatedTo).toBeNull('should not have navigated yet');

        contactLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(contactLink.navigatedTo[0]).toBe('/contact');
    });
});
