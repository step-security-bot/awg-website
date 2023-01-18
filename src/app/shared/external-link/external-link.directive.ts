import { isPlatformBrowser } from '@angular/common';
import { Directive, HostBinding, Inject, Input, OnChanges, PLATFORM_ID } from '@angular/core';

@Directive({
    selector: 'a[href]',
})
export class ExternalLinkDirective implements OnChanges {
    @HostBinding('attr.href') hrefAttr = '';
    @HostBinding('attr.target') targetAttr = '';
    @HostBinding('attr.rel') relAttr = '';
    @Input() href: string;

    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    ngOnChanges() {
        this.hrefAttr = this.href;

        if (this._isExternalLink()) {
            this.targetAttr = '_blank';
            this.relAttr = 'noopener noreferrer';
        }
    }

    private _isExternalLink() {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname) && !this._isLanguageCode();
    }

    private _isLanguageCode() {
        const langCodes = ['de', 'en'];
        const hrefSplit = this.href.split('/');

        if (hrefSplit[1] === 'awg-website' && langCodes.includes(hrefSplit[2])) {
            return true;
        }

        return false;
    }
}
