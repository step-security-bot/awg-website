import { Location } from '@angular/common';
import { Component, DebugElement, NgZone, input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, RouterModule, Routes } from '@angular/router';

import Spy = jasmine.Spy;

import { cleanStylesFromDOM } from '@testing/clean-up-helper';
import { expectSpyCall, getAndExpectDebugElementByDirective } from '@testing/expect-helper';

import { MENUDATA } from '@awg-core/page/page-data/menu-data';
import { Menu } from '@awg-core/page/page-models/menu.model';
import { MenuService } from '@awg-core/page/page-services/menu.service';

import { AppComponent } from './app.component';

// Mock components
@Component({
    selector: 'awg-corner-ribbon',
    template: '',
    standalone: false,
})
class CornerRibbonStubComponent {}

@Component({
    selector: 'awg-footer',
    template: '',
    standalone: false,
})
class FooterStubComponent {}

@Component({
    selector: 'awg-header',
    template: '',
    standalone: false,
})
class HeaderStubComponent {}

@Component({
    selector: 'awg-page',
    template: '',
    standalone: false,
})
class PageStubComponent {
    menuArray = input<Menu[]>(undefined);
    selectedMenu = input<Menu>(undefined);
}

@Component({
    selector: 'awg-test',
    template: 'test',
    standalone: false,
})
export class RoutedTestMockComponent {}

@Component({
    selector: 'awg-test2',
    template: 'test2',
    standalone: false,
})
export class RoutedTest2MockComponent {}

export const mockRoutes: Routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'test', component: RoutedTestMockComponent },
    { path: 'test2', component: RoutedTest2MockComponent },
];

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compDe: DebugElement;

    /* eslint-disable-next-line no-unused-vars */
    let ngZone: NgZone;
    let router: Router;
    let location: Location;

    let expectedMenuArray: Menu[];
    let expectedMenu: Menu;
    let mockMenuService: Partial<MenuService>;

    let provideMenuSpy: Spy;
    let provideActiveMenuSpy: Spy;
    let getMenuArraySpy: Spy;
    let getActiveMenuSpy: Spy;

    beforeEach(waitForAsync(() => {
        // Stub menuService for test purposes
        mockMenuService = {
            getMenuArray: () => MENUDATA,
            getActiveMenu: () => MENUDATA[0],
        };

        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot(mockRoutes)],
            declarations: [
                AppComponent,
                CornerRibbonStubComponent,
                HeaderStubComponent,
                FooterStubComponent,
                PageStubComponent,
                RoutedTestMockComponent,
                RoutedTest2MockComponent,
            ],
            providers: [{ provide: MenuService, useValue: mockMenuService }],
        }).compileComponents();

        // Spies for service methods
        getMenuArraySpy = spyOn(mockMenuService, 'getMenuArray').and.callThrough();
        getActiveMenuSpy = spyOn(mockMenuService, 'getActiveMenu').and.callThrough();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        compDe = fixture.debugElement;

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);

        // Workaround for ngZone issue;
        // Cf. https://github.com/angular/angular/issues/25837
        // Cf. https://github.com/ngneat/spectator/pull/334/files
        ngZone = TestBed.inject(NgZone);
        fixture.ngZone.run(() => {
            // Initial navigation
            router.initialNavigation();
        });

        // Spies on component functions
        // `.and.callThrough` will track the spy down the nested describes, see
        // https://jasmine.github.io/2.0/introduction.html#section-Spies:_%3Ccode%3Eand.callThrough%3C/code%3E
        provideMenuSpy = spyOn(component, 'provideMenu').and.callThrough();
        provideActiveMenuSpy = spyOn(component, 'provideActiveMenu').and.callThrough();
    });

    afterAll(() => {
        cleanStylesFromDOM();
    });

    it('should create the app', waitForAsync(() => {
        expect(component).toBeTruthy();
    }));

    it('injected menuService should use provided mockValue', () => {
        const menuService = TestBed.inject(MenuService);
        expect(mockMenuService === menuService).toBe(true);
    });

    describe('router setup (self-test)', () => {
        it("... initial navigation should have detected empty route ''", waitForAsync(() => {
            expect(location.path()).toBe('', "should be ''");
            expect(location.path()).toBe('', "should be ''");
        }));

        it("... should redirect to /test from '' redirect", waitForAsync(() => {
            fixture.ngZone.run(() => {
                router.navigate(['']).then(() => {
                    expect(location.path()).toBe('/test', 'should be /test');
                });
            });
        }));

        it("... should navigate to 'test' from /test", waitForAsync(() => {
            fixture.ngZone.run(() => {
                router.navigate(['/test']).then(() => {
                    expect(location.path()).toBe('/test', 'should be /test');
                });
            });
        }));

        it("... should navigate to 'test2' from /test2", waitForAsync(() => {
            fixture.ngZone.run(() => {
                router.navigate(['/test2']).then(() => {
                    expect(location.path()).toBe('/test2', 'should be /test2');
                });
            });
        }));
    });

    describe('BEFORE onInit', () => {
        it('should not have menu array', () => {
            expect(component.menuArray).toBeUndefined();
        });

        it('should not have selected menu', () => {
            expect(component.selectedMenu).toBeUndefined();
        });

        it('should contain header component (stubbed)', () => {
            getAndExpectDebugElementByDirective(compDe, HeaderStubComponent, 1, 1);
        });

        it('should contain corner ribbon component (stubbed)', () => {
            getAndExpectDebugElementByDirective(compDe, CornerRibbonStubComponent, 1, 1);
        });

        it('should contain footer component (stubbed)', () => {
            getAndExpectDebugElementByDirective(compDe, FooterStubComponent, 1, 1);
        });

        it('should not contain page component (stubbed)', () => {
            getAndExpectDebugElementByDirective(compDe, PageStubComponent, 0, 0);
        });
    });

    describe('AFTER onInit', () => {
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

        describe('#provideMenu', () => {
            it('... should have been called', () => {
                expectSpyCall(provideMenuSpy, 1);
            });

            it('... should have called menu service to get menu array', () => {
                expectSpyCall(getMenuArraySpy, 1);
            });

            it('... should return menu array', () => {
                expect(component.menuArray).toBe(expectedMenuArray);
            });
        });

        describe('#provideActiveMenu', () => {
            it('... should return selected menu', () => {
                expect(component.selectedMenu).toBe(expectedMenu);

                getActiveMenuSpy.and.returnValue(MENUDATA[1]);

                component.provideActiveMenu(MENUDATA[1].linkTo);

                expect(component.selectedMenu).toEqual(MENUDATA[1]);
            });

            it('... should be triggered when the route url changes', waitForAsync(() => {
                expectSpyCall(provideActiveMenuSpy, 0, undefined);

                fixture.ngZone.run(() => {
                    router.navigate(['test']).then(() => {
                        expectSpyCall(provideActiveMenuSpy, 1, '/test');

                        router.navigate(['test2']).then(() => {
                            expectSpyCall(provideActiveMenuSpy, 2, '/test2');

                            router.navigate(['']).then(() => {
                                expectSpyCall(provideActiveMenuSpy, 3, '/test');
                            });
                        });
                    });
                });
            }));

            it('... should call menu service to get active menu (with path) when the route url changes', waitForAsync(() => {
                expectSpyCall(provideActiveMenuSpy, 0, undefined);
                expectSpyCall(getActiveMenuSpy, 0, [expectedMenuArray, undefined]);

                fixture.ngZone.run(() => {
                    router.navigate(['test']).then(() => {
                        expectSpyCall(provideActiveMenuSpy, 1, '/test');
                        expectSpyCall(getActiveMenuSpy, 1, [expectedMenuArray, '/test']);

                        router.navigate(['test2']).then(() => {
                            expectSpyCall(provideActiveMenuSpy, 2, '/test2');
                            expectSpyCall(getActiveMenuSpy, 2, [expectedMenuArray, '/test2']);

                            router.navigate(['']).then(() => {
                                expectSpyCall(provideActiveMenuSpy, 3, '/test');
                                expectSpyCall(getActiveMenuSpy, 3, [expectedMenuArray, '/test']);
                            });
                        });
                    });
                });
            }));
        });

        it('should contain page component (stubbed)', () => {
            getAndExpectDebugElementByDirective(compDe, PageStubComponent, 1, 1);
        });

        it('should pass down menuArray & selectedMenu to page component', () => {
            const pageDes = getAndExpectDebugElementByDirective(compDe, PageStubComponent, 1, 1);
            const pageCmp = pageDes[0].injector.get(PageStubComponent) as PageStubComponent;

            expect(pageCmp.menuArray()).toBeTruthy();
            expect(pageCmp.menuArray()).toBe(MENUDATA);

            expect(pageCmp.selectedMenu()).toBeTruthy();
            expect(pageCmp.selectedMenu()).toBe(MENUDATA[0]);
        });
    });
});
