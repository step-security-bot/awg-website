import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MenuComponent, RouterLinkStubDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;

        // Mock the menu array supplied by the parent component
        expectedMenuArray = MENUDATA;

        // Simulate the parent setting the input property with that menu array
        component.menuArray = expectedMenuArray;

        // Trigger initial data binding
        fixture.detectChanges();

        // Find the DebugElement and element of the first & last menu
        firstMenuDe = fixture.debugElement.query(By.css('.first'));
        firstMenuEl = firstMenuDe.nativeElement;
        lastMenuDe = fixture.debugElement.query(By.css('.last'));
        lastMenuEl = lastMenuDe.nativeElement;

        // Find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

        // Get attached link directive instances
        // Using each DebugElement's injector
        routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get menu array input after data binding', () => {
        expect(component.menuArray).toBeDefined();
        expect(component.menuArray).toBe(expectedMenuArray);
    });

    it('can get routerLinks from template', () => {
        expect(routerLinks.length).withContext('should have 6 routerLinks').toBe(6);
        expect(routerLinks[0].routerLink).toBe('/project');
        expect(routerLinks[1].routerLink).toBe('/webern');
        expect(routerLinks[2].routerLink).toBe('/works');
        expect(routerLinks[3].routerLink).toBe('/edition');
        expect(routerLinks[4].routerLink).toBe('/research');
        expect(routerLinks[5].routerLink).toBe('/contact');
    });

    it('can click edition link in template', () => {
        const editionLinkDe = linkDes[3]; // Edition link DebugElement
        const editionLink = routerLinks[3]; // Edition link directive

        expect(editionLink.navigatedTo).toBeNull();

        editionLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(editionLink.navigatedTo).toBeDefined();
        expect(editionLink.navigatedTo).withContext(`should be '/edition'`).toBe('/edition');
    });

    it('should apply class .first only to first menu', () => {
        expect(linkDes[0].nativeElement.className).toContain('first');
        expect(linkDes[1].nativeElement.className).not.toContain('first');
        expect(linkDes[2].nativeElement.className).not.toContain('first');
        expect(linkDes[3].nativeElement.className).not.toContain('first');
        expect(linkDes[4].nativeElement.className).not.toContain('first');
        expect(linkDes[5].nativeElement.className).not.toContain('first');
    });

    it('should apply class .last only to last menu', () => {
        expect(linkDes[0].nativeElement.className).not.toContain('last');
        expect(linkDes[1].nativeElement.className).not.toContain('last');
        expect(linkDes[2].nativeElement.className).not.toContain('last');
        expect(linkDes[3].nativeElement.className).not.toContain('last');
        expect(linkDes[4].nativeElement.className).not.toContain('last');
        expect(linkDes[5].nativeElement.className).toContain('last');
    });

    it('should display menu label in uppercase', () => {
        const expectedFirstUppercaseLabel = expectedMenuArray.at(0).label.toUpperCase(); // Label: PROJEKT
        const expectedLastUppercaseLabel = expectedMenuArray.at(-1).label.toUpperCase(); // Label: ' ' (empty)

        expect(firstMenuEl.textContent).toBeTruthy();
        expect(firstMenuEl.textContent)
            .withContext(`should contain ${expectedFirstUppercaseLabel}`)
            .toContain(expectedFirstUppercaseLabel);

        expect(lastMenuEl.textContent).toBeTruthy();
        expect(lastMenuEl.textContent)
            .withContext(`should contain ${expectedLastUppercaseLabel}`)
            .toContain(expectedLastUppercaseLabel);
    });
});
