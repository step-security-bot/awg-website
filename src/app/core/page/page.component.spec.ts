import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Observable, of as observableOf } from 'rxjs';
import Spy = jasmine.Spy;

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';

import { MENUDATA } from './page-data/menu-data';
import { Menu } from './page-models/menu.model';
import { PortalService } from './page-services/portal.service';

import { PageComponent } from './page.component';

@Component({ selector: 'awg-main-text', template: '' })
class MainTextStubComponent {}

@Component({ selector: 'awg-menu', template: '' })
class MenuStubComponent {
    @Input()
    menuArray: Menu[];
}

@Component({ selector: 'awg-right-text', template: '' })
class RightTextStubComponent {
    @Input() rightPanelPortal: TemplateRef<unknown>;
}

@Component({ selector: 'awg-search', template: '' })
class SearchStubComponent {}

@Component({ selector: 'awg-sub-menu', template: '' })
class SubMenuStubComponent {
    @Input()
    selectedMenu: Menu;
}

// Mock component to get templateRef
@Component({
    template: ` <ng-template #template><h1>Test template</h1></ng-template> `,
})
class MockTemplateComponent {
    @ViewChild('template', { static: true }) public template: TemplateRef<any>;
}

describe('PageComponent', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;
    let expectedMenuArray: Menu[];
    let expectedMenu: Menu;

    let mockPortalService: Partial<PortalService>;
    let portalServiceSpy: Spy;

    let mockTemplate: TemplateRef<unknown>;

    beforeEach(
        waitForAsync(() => {
            // Stub service for test purposes
            mockPortalService = {
                getRightPanelPortalData: (): Observable<TemplateRef<unknown>> => observableOf(),
            };

            TestBed.configureTestingModule({
                declarations: [
                    PageComponent,
                    MainTextStubComponent,
                    MenuStubComponent,
                    MockTemplateComponent,
                    RightTextStubComponent,
                    SearchStubComponent,
                    SubMenuStubComponent,
                    RouterLinkStubDirective,
                ],
                providers: [{ provide: PortalService, useValue: mockPortalService }],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;

        // Spies on component functions
        // `.and.callThrough` will track the spy down the nested describes, see
        // https://jasmine.github.io/2.0/introduction.html#section-Spies:_%3Ccode%3Eand.callThrough%3C/code%3E
        portalServiceSpy = spyOn(mockPortalService, 'getRightPanelPortalData').and.callThrough();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('injected service should use provided mockValue', () => {
        const portalService = TestBed.inject(PortalService);
        expect(mockPortalService === portalService).toBe(true);
    });

    describe('BEFORE initial data binding', () => {
        it('should not get menu array input', () => {
            expect(component.menuArray).toBeUndefined();
        });

        it('should not get selected menu input', () => {
            expect(component.selectedMenu).toBeUndefined();
        });

        it('should contain main text component (stubbed)', () => {
            const mainTextCmp = fixture.debugElement.query(By.directive(MainTextStubComponent));
            expect(mainTextCmp).toBeTruthy();
        });

        it('should contain search component (stubbed)', () => {
            const searchDes = fixture.debugElement.query(By.directive(SearchStubComponent));
            expect(searchDes).toBeTruthy();
        });

        it('should contain no right panel portal component (stubbed) yet', () => {
            const rightPanelPortalDes = fixture.debugElement.query(By.directive(RightTextStubComponent));
            expect(rightPanelPortalDes).not.toBeTruthy();
        });

        it('should not contain menu component (real) yet', () => {
            const menuDes = fixture.debugElement.query(By.directive(MenuStubComponent));
            expect(menuDes).not.toBeTruthy();
        });

        it('should not contain submenu component (real) yet', () => {
            const subMenuDes = fixture.debugElement.query(By.directive(SubMenuStubComponent));
            expect(subMenuDes).not.toBeTruthy();
        });
    });

    describe('AFTER initial data binding', () => {
        beforeEach(() => {
            // Mock the input values supplied by the parent component
            expectedMenuArray = MENUDATA;
            expectedMenu = MENUDATA[0];

            const mockFixture = TestBed.createComponent(MockTemplateComponent);
            const mockComponent = mockFixture.componentInstance;
            mockTemplate = mockComponent.template;

            // Simulate the parent setting the input properties
            component.menuArray = expectedMenuArray;
            component.selectedMenu = expectedMenu;

            portalServiceSpy.and.returnValue(observableOf(mockTemplate));

            // Trigger initial data binding
            fixture.detectChanges();
        });

        it('should get menu array input', () => {
            expect(component.menuArray).toBe(expectedMenuArray);
        });

        it('should get selected menu input', () => {
            expect(component.selectedMenu).toBe(expectedMenu);
        });

        it('should contain right panel portal component (stubbed)', () => {
            const rightPanelPortalDes = fixture.debugElement.query(By.directive(RightTextStubComponent));

            expect(rightPanelPortalDes).toBeTruthy();
        });

        it('should contain menu component (real)', () => {
            const menuDes = fixture.debugElement.query(By.directive(MenuStubComponent));

            expect(menuDes).toBeTruthy();
        });

        it('should contain submenu component (real)', () => {
            const subMenuDes = fixture.debugElement.query(By.directive(SubMenuStubComponent));

            expect(subMenuDes).toBeTruthy();
        });

        it('should pass down menu array to menu component', () => {
            const menuDes = fixture.debugElement.query(By.directive(MenuStubComponent));
            const menuCmp = menuDes.injector.get(MenuStubComponent) as MenuStubComponent;

            expect(menuCmp.menuArray).toBeTruthy();
            expect(menuCmp.menuArray).toBe(MENUDATA);
        });

        it('should pass down selected menu to submenu component', () => {
            const subMenuDes = fixture.debugElement.query(By.directive(SubMenuStubComponent));
            const subMenuCmp = subMenuDes.injector.get(SubMenuStubComponent) as SubMenuStubComponent;

            expect(subMenuCmp.selectedMenu).toBeTruthy();
            expect(subMenuCmp.selectedMenu).toBe(MENUDATA[0]);
        });

        it('should pass down right panel portal to right panel portal component', () => {
            const rightPanelPortalDes = fixture.debugElement.query(By.directive(RightTextStubComponent));
            const rightPanelPortalCmp = rightPanelPortalDes.injector.get(
                RightTextStubComponent
            ) as RightTextStubComponent;

            expect(rightPanelPortalCmp.rightPanelPortal).toBeTruthy();
            expect(rightPanelPortalCmp.rightPanelPortal).toEqual(mockTemplate);
        });
    });
});
