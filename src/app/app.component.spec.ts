import { Location } from '@angular/common';
import { Component, DebugElement, Input, NgZone } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import Spy = jasmine.Spy;

import { cleanStylesFromDOM } from '@testing/clean-up-helper';
import { expectSpyCall } from '@testing/expect-helper';

import { MENUDATA } from '@awg-core/page/page-data/menu-data';
import { Menu } from '@awg-core/page/page-models/menu.model';
import { MenuService } from '@awg-core/page/page-services/menu.service';

import { AppComponent } from './app.component';

// Mock components
@Component({ selector: 'awg-corner-ribbon', template: '' })
class CornerRibbonStubComponent {}

@Component({ selector: 'awg-footer', template: '' })
class FooterStubComponent {}

@Component({ selector: 'awg-header', template: '' })
class HeaderStubComponent {}

@Component({ selector: 'awg-page', template: '' })
class PageStubComponent {
    @Input()
    menuArray: Menu[];
    @Input()
    selectedMenu: Menu;
}

@Component({ selector: 'awg-test', template: 'test' })
export class RoutedTestMockComponent {}

@Component({ selector: 'awg-test2', template: 'test2' })
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
    let compEl: any;

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

    beforeEach(
        waitForAsync(() => {
            // Stub menuService for test purposes
            mockMenuService = {
                getMenuArray: () => MENUDATA,
                getActiveMenu: () => MENUDATA[0],
            };

            TestBed.configureTestingModule({
                imports: [RouterTestingModule.withRoutes(mockRoutes)],
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
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        compDe = fixture.debugElement;
        compEl = compDe.nativeElement;

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

    it(
        'should create the app',
        waitForAsync(() => {
            expect(component).toBeTruthy();
        })
    );

    it('injected menuService should use provided mockValue', () => {
        const menuService = TestBed.inject(MenuService);
        expect(mockMenuService === menuService).toBe(true);
    });

    describe('router setup (self-test)', () => {
        it(
            "... initial navigation should have detected empty route ''",
            waitForAsync(() => {
                expect(location.path()).toBe('', "should be ''");
                expect(location.path()).toBe('', "should be ''");
            })
        );

        it(
            "... should redirect to /test from '' redirect",
            waitForAsync(() => {
                fixture.ngZone.run(() => {
                    router.navigate(['']).then(() => {
                        expect(location.path()).toBe('/test', 'should be /test');
                    });
                });
            })
        );

        it(
            "... should navigate to 'test' from /test",
            waitForAsync(() => {
                fixture.ngZone.run(() => {
                    router.navigate(['/test']).then(() => {
                        expect(location.path()).toBe('/test', 'should be /test');
                    });
                });
            })
        );

        it(
            "... should navigate to 'test2' from /test2",
            waitForAsync(() => {
                fixture.ngZone.run(() => {
                    router.navigate(['/test2']).then(() => {
                        expect(location.path()).toBe('/test2', 'should be /test2');
                    });
                });
            })
        );
    });

    describe('BEFORE onInit', () => {
        it('should not have menu array', () => {
            expect(component.menuArray).toBeUndefined();
        });

        it('should not have selected menu', () => {
            expect(component.selectedMenu).toBeUndefined();
        });

        it('should contain header component (stubbed)', () => {
            const headerEl = fixture.debugElement.query(By.directive(HeaderStubComponent));
            expect(headerEl).toBeTruthy();
        });

        it('should contain corner ribbon component (stubbed)', () => {
            const cornerRibbonEl = fixture.debugElement.query(By.directive(CornerRibbonStubComponent));
            expect(cornerRibbonEl).toBeTruthy();
        });

        it('should contain footer component (stubbed)', () => {
            const footerEl = fixture.debugElement.query(By.directive(FooterStubComponent));
            expect(footerEl).toBeTruthy();
        });

        it('should not contain page component (stubbed)', () => {
            const pageEl = fixture.debugElement.query(By.directive(PageStubComponent));
            expect(pageEl).not.toBeTruthy();
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

            it('... should have triggered `provideActiveMenu()`', () => {
                expectSpyCall(provideActiveMenuSpy, 1);
            });
        });

        describe('#provideActiveMenu', () => {
            it('... should have been called', () => {
                expectSpyCall(provideActiveMenuSpy, 1, undefined);
            });

            it('... should have called menu service to get active menu (without path)', () => {
                expectSpyCall(getActiveMenuSpy, 1, [expectedMenuArray, undefined]);
            });

            it('... should return selected menu', () => {
                expect(component.selectedMenu).toBe(expectedMenu);
            });

            it(
                '... should be called when the route url changes',
                waitForAsync(() => {
                    expectSpyCall(provideActiveMenuSpy, 1, undefined);

                    fixture.ngZone.run(() => {
                        router.navigate(['test']).then(() => {
                            expectSpyCall(provideActiveMenuSpy, 2, '/test');

                            router.navigate(['test2']).then(() => {
                                expectSpyCall(provideActiveMenuSpy, 3, '/test2');

                                router.navigate(['']).then(() => {
                                    expectSpyCall(provideActiveMenuSpy, 4, '/test');
                                });
                            });
                        });
                    });
                })
            );

            it(
                '... should have called menu service to get active menu (with path) when the route url changes',
                waitForAsync(() => {
                    expectSpyCall(provideActiveMenuSpy, 1, undefined);
                    expectSpyCall(getActiveMenuSpy, 1, [expectedMenuArray, undefined]);

                    fixture.ngZone.run(() => {
                        router.navigate(['test']).then(() => {
                            expectSpyCall(provideActiveMenuSpy, 2, '/test');
                            expectSpyCall(getActiveMenuSpy, 2, [expectedMenuArray, '/test']);

                            router.navigate(['test2']).then(() => {
                                expectSpyCall(provideActiveMenuSpy, 3, '/test2');
                                expectSpyCall(getActiveMenuSpy, 3, [expectedMenuArray, '/test2']);

                                router.navigate(['']).then(() => {
                                    expectSpyCall(provideActiveMenuSpy, 4, '/test');
                                    expectSpyCall(getActiveMenuSpy, 4, [expectedMenuArray, '/test']);
                                });
                            });
                        });
                    });
                })
            );
        });

        it('should contain page component (stubbed)', () => {
            const pageEl = fixture.debugElement.query(By.directive(PageStubComponent));
            expect(pageEl).toBeTruthy();
        });

        it('should pass down menuArray & selectedMenu to page component', () => {
            const pageEl = fixture.debugElement.query(By.directive(PageStubComponent));
            const pageCmp = pageEl.injector.get(PageStubComponent) as PageStubComponent;

            expect(pageCmp.menuArray).toBeTruthy();
            expect(pageCmp.menuArray).toBe(MENUDATA);

            expect(pageCmp.selectedMenu).toBeTruthy();
            expect(pageCmp.selectedMenu).toBe(MENUDATA[0]);
        });
    });
});
