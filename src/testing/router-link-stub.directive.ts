import { Directive, HostListener, input } from '@angular/core';

@Directive({
    selector: '[routerLink]',
    standalone: false,
})
export class RouterLinkStubDirective {
    readonly routerLink = input<any>(undefined);

    navigatedTo: any = null;

    @HostListener('click')
    onClick() {
        this.navigatedTo = this.routerLink();
    }
}
