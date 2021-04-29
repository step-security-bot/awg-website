/**
 * A fake router module.
 *
 * Needed so that `aot` build is working. But it isn't used throughout our tests and/or app.
 */
import { NgModule } from '@angular/core';

import { AppModule } from '@awg-app/app.module';

import { RouterLinkStubDirective } from '@testing/router-link-stub.directive';
import { RouterOutletStubComponent } from '@testing/router-outlet-stub.component';

@NgModule({
    imports: [AppModule],
    declarations: [RouterLinkStubDirective, RouterOutletStubComponent],
})
export class FakeRouterModule {}
