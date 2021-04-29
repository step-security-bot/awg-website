import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { MENUDATA } from '@awg-core/page/page-data/menu-data';
import { Menu } from '@awg-core/page/page-models/menu.model';

import { SubMenuComponent } from './sub-menu.component';

describe('SubMenuComponent', () => {
    let component: SubMenuComponent;
    let fixture: ComponentFixture<SubMenuComponent>;
    let linkDes: DebugElement[];
    let firstMenuDe: DebugElement;
    let lastMenuDe: DebugElement;
    let firstMenuEl;
    let lastMenuEl;
    let routerLinks: RouterLinkStubDirective[];
    let expectedMenu: Menu;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [SubMenuComponent, RouterLinkStubDirective]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SubMenuComponent);
        component = fixture.componentInstance;

        // mock the menu array supplied by the parent component
        expectedMenu = MENUDATA[0];

        // simulate the parent setting the input property with that menu array
        component.selectedMenu = expectedMenu;

        // trigger initial data binding
        fixture.detectChanges();

        // find the DebugElement and element of the first & last menu
        firstMenuDe = fixture.debugElement.query(By.css('.first'));
        firstMenuEl = firstMenuDe.nativeElement;
        lastMenuDe = fixture.debugElement.query(By.css('.last'));
        lastMenuEl = lastMenuDe.nativeElement;

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

        // get attached link directive instances
        // using each DebugElement's injector
        routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get menu input after data binding', () => {
        expect(component.selectedMenu).toBe(expectedMenu);
    });

    it('can get routerLinks from template', () => {
        expect(routerLinks.length).toBe(5, 'should have 5 routerLinks');
        routerLinks.forEach(route => {
            expect(route.routerLink[0]).toBe('/project');
        }); // every route has /project root
        expect(routerLinks[0].routerLink[1]).toBe('overview');
        expect(routerLinks[1].routerLink[1]).toBe('team');
        expect(routerLinks[2].routerLink[1]).toBe('board');
        expect(routerLinks[3].routerLink[1]).toBe('cooperations');
        expect(routerLinks[4].routerLink[1]).toBe('news-archive');
    });

    it('can click edition link in template', () => {
        const boardLinkDe = linkDes[2]; // board link DebugElement
        const boardLink = routerLinks[2]; // board link directive

        expect(boardLink.navigatedTo).toBeNull('should not have navigated yet');

        boardLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(boardLink.navigatedTo[0]).toBe('/project');
        expect(boardLink.navigatedTo[1]).toBe('board');
    });

    it('should apply class .first only to first menu', () => {
        expect(linkDes[0].nativeElement.className).toContain('first');
        expect(linkDes[1].nativeElement.className).not.toContain('first');
        expect(linkDes[2].nativeElement.className).not.toContain('first');
        expect(linkDes[3].nativeElement.className).not.toContain('first');
        expect(linkDes[4].nativeElement.className).not.toContain('first');
    });

    it('should apply class .last only to last menu', () => {
        expect(linkDes[0].nativeElement.className).not.toContain('last');
        expect(linkDes[1].nativeElement.className).not.toContain('last');
        expect(linkDes[2].nativeElement.className).not.toContain('last');
        expect(linkDes[3].nativeElement.className).not.toContain('last');
        expect(linkDes[4].nativeElement.className).toContain('last');
    });

    it('should display menu label in uppercase', () => {
        const expectedFirstUppercaseLabel = expectedMenu.subMenu[0].label.toUpperCase(); // label: OVERVIEW
        const expectedLastUppercaseLabel = expectedMenu.subMenu[4].label.toUpperCase(); // label: NEWS-ARCHIV
        expect(firstMenuEl.textContent).toContain(expectedFirstUppercaseLabel);
        expect(lastMenuEl.textContent).toContain(expectedLastUppercaseLabel);
    });
});
