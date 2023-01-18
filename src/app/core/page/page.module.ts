import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-shared/shared.module';

import { PageComponent } from './page.component';
import { MainTextComponent } from './main-text/main-text.component';
import { MenuComponent } from './menu/menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SearchComponent } from './search/search.component';
import { RightTextComponent } from './right-text/right-text.component';

@NgModule({
    imports: [SharedModule],
    declarations: [
        PageComponent,
        MainTextComponent,
        MenuComponent,
        RightTextComponent,
        SearchComponent,
        SubMenuComponent,
    ],
    exports: [PageComponent, MainTextComponent, MenuComponent, RightTextComponent, SearchComponent, SubMenuComponent],
})
export class PageModule {}
