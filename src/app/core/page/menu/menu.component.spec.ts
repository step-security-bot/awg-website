import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { MENUDATA } from '@awg-core/page/page-data/menu-data';
import { Menu } from '@awg-core/page/page-models/menu.model';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let linkDes: DebugElement[];
    let firstMenuDe: DebugElement;
    let lastMenuDe: DebugElement;
    let firstMenuEl;
    let lastMenuEl;
    let routerLinks: RouterLinkStubDirective[];
    let expectedMenuArray: Menu[];

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [MenuComponent, RouterLinkStubDirective]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;

        // mock the menu array supplied by the parent component
        expectedMenuArray = MENUDATA;

        // simulate the parent setting the input property with that menu array
        component.menuArray = expectedMenuArray;

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

    it('should get menu array input after data binding', () => {
        expect(component.menuArray).toBe(expectedMenuArray);
    });

    it('can get routerLinks from template', () => {
        expect(routerLinks.length).toBe(5, 'should have 5 routerLinks');
        expect(routerLinks[0].routerLink).toBe('/project');
        expect(routerLinks[1].routerLink).toBe('/webern');
        expect(routerLinks[2].routerLink).toBe('/works');
        expect(routerLinks[3].routerLink).toBe('/edition');
        expect(routerLinks[4].routerLink).toBe('/research');
    });

    it('can click edition link in template', () => {
        const editionLinkDe = linkDes[3]; // edition link DebugElement
        const editionLink = routerLinks[3]; // edition link directive

        expect(editionLink.navigatedTo).toBeNull('should not have navigated yet');

        editionLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(editionLink.navigatedTo).toBe('/edition');
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
        const expectedFirstUppercaseLabel = expectedMenuArray[0].label.toUpperCase(); // label: PROJEKT
        const expectedLastUppercaseLabel = expectedMenuArray[4].label.toUpperCase(); // label: RESEARCH
        expect(firstMenuEl.textContent).toContain(expectedFirstUppercaseLabel);
        expect(lastMenuEl.textContent).toContain(expectedLastUppercaseLabel);
    });
});
