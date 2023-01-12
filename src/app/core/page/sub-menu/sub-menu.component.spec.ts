import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { MENUDATA } from '@awg-core/page/page-data/menu-data';
import { Menu } from '@awg-core/page/page-models/menu.model';

import { SubMenuComponent } from './sub-menu.component';

describe('SubMenuComponent', () => {
    let component: SubMenuComponent;
    let fixture: ComponentFixture<SubMenuComponent>;

    let linkDes: DebugElement[];
    let firstSubMenuDe: DebugElement;
    let lastSubMenuDe: DebugElement;
    let firstSubMenuEl;
    let lastSubMenuEl;

    let routerLinks: RouterLinkStubDirective[];
    let expectedMenu: Menu;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SubMenuComponent, RouterLinkStubDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubMenuComponent);
        component = fixture.componentInstance;

        // Mock the menu array supplied by the parent component
        expectedMenu = MENUDATA[0];

        // Simulate the parent setting the input property with that menu array
        component.selectedMenu = expectedMenu;

        // Trigger initial data binding
        fixture.detectChanges();

        // Find the DebugElement and element of the first & last sub menu
        firstSubMenuDe = fixture.debugElement.query(By.css('.first'));
        firstSubMenuEl = firstSubMenuDe.nativeElement;
        lastSubMenuDe = fixture.debugElement.query(By.css('.last'));
        lastSubMenuEl = lastSubMenuDe.nativeElement;

        // Find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

        // Get attached link directive instances
        // Using each DebugElement's injector
        routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get menu input after data binding', () => {
        expect(component.selectedMenu).toBe(expectedMenu);
    });

    it('can get project routerLinks from template', () => {
        expect(routerLinks.length).withContext('should have 5 routerLinks').toBe(5);
        routerLinks.forEach(route => {
            expect(route.routerLink[0]).toBe('/project');
        }); // Every route has /project root
        expect(routerLinks[0].routerLink[1]).toBe('overview');
        expect(routerLinks[1].routerLink[1]).toBe('team');
        expect(routerLinks[2].routerLink[1]).toBe('board');
        expect(routerLinks[3].routerLink[1]).toBe('cooperations');
        expect(routerLinks[4].routerLink[1]).toBe('news-archive');
    });

    it('can click board link in template', () => {
        const boardLinkDe = linkDes[2]; // Board link DebugElement
        const boardLink = routerLinks[2]; // Board link directive

        expect(boardLink.navigatedTo).toBeNull();

        boardLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(boardLink.navigatedTo[0]).toBe('/project');
        expect(boardLink.navigatedTo[1]).toBe('board');
    });

    it('should apply class .first only to first sub menu', () => {
        expect(linkDes[0].nativeElement.className).toContain('first');
        expect(linkDes[1].nativeElement.className).not.toContain('first');
        expect(linkDes[2].nativeElement.className).not.toContain('first');
        expect(linkDes[3].nativeElement.className).not.toContain('first');
        expect(linkDes[4].nativeElement.className).not.toContain('first');
    });

    it('should apply class .last only to last sub menu', () => {
        expect(linkDes[0].nativeElement.className).not.toContain('last');
        expect(linkDes[1].nativeElement.className).not.toContain('last');
        expect(linkDes[2].nativeElement.className).not.toContain('last');
        expect(linkDes[3].nativeElement.className).not.toContain('last');
        expect(linkDes[4].nativeElement.className).toContain('last');
    });

    it('should display sub menu label in uppercase', () => {
        const expectedFirstUppercaseLabel = expectedMenu.subMenu[0].label.toUpperCase(); // Label: OVERVIEW
        const expectedLastUppercaseLabel = expectedMenu.subMenu[4].label.toUpperCase(); // Label: NEWS-ARCHIV

        expect(firstSubMenuEl.textContent).toBeTruthy();
        expect(firstSubMenuEl.textContent)
            .withContext(`should contain ${expectedFirstUppercaseLabel}`)
            .toContain(expectedFirstUppercaseLabel);

        expect(lastSubMenuEl.textContent).toBeTruthy();
        expect(lastSubMenuEl.textContent)
            .withContext(`should contain ${expectedLastUppercaseLabel}`)
            .toContain(expectedLastUppercaseLabel);
    });
});
