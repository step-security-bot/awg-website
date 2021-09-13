import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { Menu } from './page-models/menu.model';
import { MENUDATA } from './page-data/menu-data';
import { MenuComponent } from './menu/menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

import { PageComponent } from './page.component';

@Component({ selector: 'awg-main-text', template: '' })
class MainTextStubComponent {}

@Component({ selector: 'awg-right-text', template: '' })
class RightTextStubComponent {}

@Component({ selector: 'awg-search', template: '' })
class SearchStubComponent {}

describe('PageComponent', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;
    let expectedMenuArray: Menu[];
    let expectedMenu: Menu;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [
                    PageComponent,
                    MenuComponent,
                    SubMenuComponent,
                    MainTextStubComponent,
                    RightTextStubComponent,
                    SearchStubComponent,
                    RouterLinkStubDirective,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('BEFORE initial data binding', () => {
        it('should not get menu array input', () => {
            expect(component.menuArray).toBeUndefined('should be undefined');
        });

        it('should not get selected menu input', () => {
            expect(component.selectedMenu).toBeUndefined('should be undefined');
        });

        it('should contain main text component (stubbed)', () => {
            const mockMainTextEl = fixture.debugElement.query(By.directive(MainTextStubComponent));
            expect(mockMainTextEl).toBeTruthy();
        });

        it('should contain right text component (stubbed)', () => {
            const mockRightTextEl = fixture.debugElement.query(By.directive(RightTextStubComponent));
            expect(mockRightTextEl).toBeTruthy();
        });

        it('should contain search component (stubbed)', () => {
            const mockSearchEl = fixture.debugElement.query(By.directive(SearchStubComponent));
            expect(mockSearchEl).toBeTruthy();
        });

        it('should not contain menu component (real)', () => {
            const menuEl = fixture.debugElement.query(By.directive(MenuComponent));
            expect(menuEl).not.toBeTruthy();
        });

        it('should not contain submenu component (real)', () => {
            const subMenuEl = fixture.debugElement.query(By.directive(SubMenuComponent));
            expect(subMenuEl).not.toBeTruthy();
        });
    });

    describe('AFTER initial data binding', () => {
        beforeEach(() => {
            // Mock the input values supplied by the parent component
            expectedMenuArray = MENUDATA;
            expectedMenu = MENUDATA[0];

            // Simulate the parent setting the input properties
            component.menuArray = expectedMenuArray;
            component.selectedMenu = expectedMenu;

            // Trigger initial data binding
            fixture.detectChanges();
        });

        it('should get menu array input', () => {
            expect(component.menuArray).toBe(expectedMenuArray);
        });

        it('should get selected menu input', () => {
            expect(component.selectedMenu).toBe(expectedMenu);
        });

        it('should contain menu component (real)', () => {
            const menuEl = fixture.debugElement.query(By.directive(MenuComponent));

            expect(menuEl).toBeTruthy();
        });

        it('should contain submenu component (real)', () => {
            const subMenuEl = fixture.debugElement.query(By.directive(SubMenuComponent));

            expect(subMenuEl).toBeTruthy();
        });

        it('should pass down menu array to menu component', () => {
            const menuEl = fixture.debugElement.query(By.directive(MenuComponent));
            const menuCmp = menuEl.injector.get(MenuComponent) as MenuComponent;

            expect(menuCmp.menuArray).toBeTruthy();
            expect(menuCmp.menuArray).toBe(MENUDATA);
        });

        it('should pass down selected menu to submenu component', () => {
            const subMenuEl = fixture.debugElement.query(By.directive(SubMenuComponent));
            const subMenuCmp = subMenuEl.injector.get(SubMenuComponent) as SubMenuComponent;

            expect(subMenuCmp.selectedMenu).toBeTruthy();
            expect(subMenuCmp.selectedMenu).toBe(MENUDATA[0]);
        });
    });
});
