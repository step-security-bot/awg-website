import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from '../../../testing/router-link-stub.directive';

import { HeaderComponent } from './header.component';

// Mock components
@Component({ selector: 'awg-locale-switcher', template: '' })
class LocaleSwitcherStubComponent {}

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let linkDes;
    let routerLinks;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent, LocaleSwitcherStubComponent, RouterLinkStubDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
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

    it('can click contact link in template', () => {
        const contactLinkDe = linkDes[0]; // Contact link DebugElement
        const contactLink = routerLinks[0]; // Contact link directive

        expect(contactLink.navigatedTo).toBeNull();

        contactLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(contactLink.navigatedTo[0]).toBe('/contact');
    });

    it('should contain locale switcher component (stubbed)', () => {
        const localeSwitcherEl = fixture.debugElement.query(By.directive(LocaleSwitcherStubComponent));
        expect(localeSwitcherEl).toBeTruthy();
    });
});
