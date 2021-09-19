import { TestBed, inject } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { Menu } from '@awg-core/page/page-models/menu.model';
import { MENUDATA } from '@awg-core/page/page-data/menu-data';

describe('MenuService', () => {
    let menuService: MenuService;
    let expectedMenuArray: Menu[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MenuService],
        });
        menuService = TestBed.inject(MenuService);
        expectedMenuArray = MENUDATA;
    });

    it('should inject', inject([MenuService], (service: MenuService) => {
        expect(service).toBeTruthy();
    }));

    describe('#getMenuArray', () => {
        it('... should return menu array', () => {
            expect(menuService.getMenuArray()).toBe(expectedMenuArray);
        });
    });

    describe('#getActiveMenu', () => {
        it('... should return home menu (/project) if no path is set', () => {
            const homeMenu: Menu = MENUDATA[0];

            expect(menuService.getActiveMenu(expectedMenuArray)).toBe(homeMenu);
        });

        it('... should not return home menu (/project) if path is set', () => {
            const homeMenu: Menu = MENUDATA[0];
            const path = '/edition';

            expect(menuService.getActiveMenu(expectedMenuArray, path)).not.toBe(homeMenu);
        });

        it('... should return edition menu if edition path is set', () => {
            const editionMenu: Menu = MENUDATA[3];
            const editionPath = '/edition';

            expect(menuService.getActiveMenu(expectedMenuArray, editionPath)).toBe(editionMenu);
        });
    });
});
