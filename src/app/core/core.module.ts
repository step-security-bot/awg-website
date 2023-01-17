import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PageModule } from './page/page.module';

import { CornerRibbonComponent } from './corner-ribbon';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
    imports: [SharedModule, PageModule],
    declarations: [CornerRibbonComponent, FooterComponent, HeaderComponent, LocaleSwitcherComponent],
    exports: [CornerRibbonComponent, FooterComponent, HeaderComponent, PageModule],
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
