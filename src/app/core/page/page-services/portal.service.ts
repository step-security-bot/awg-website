import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

    /**
     * Private subject to handle right text portal data.
     */
    private _rightTextPortalDataSubject: Subject<TemplateRef<unknown>> = new BehaviorSubject<TemplateRef<unknown> | null >(null);

    /**
     * Readonly right text portal data stream as observable (`Subject`).
     */
    private readonly _rightTextPortalDataStream$ = this._rightTextPortalDataSubject.asObservable();

    /**
     * Public method: getRightTextPortalData.
     *
     * It provides the latest data from the right text portal data stream.
     *
     * @returns {Observable<TemplateRef<unknown>>} The right text portal data stream as observable.
     */
    getRightTextPortalData(): Observable<TemplateRef<unknown>> {
        return this._rightTextPortalDataStream$;
    }

    /**
     * Public method: updateRightTextPortalData.
     *
     * It updates the right text portal data stream with the given data (`templateRef`).
     *
     * @returns {void} Sets the next templateRef to the right text portal data stream.
     */
    updateRightTextPortalData(templateRef: TemplateRef<unknown>): void {
        console.log(templateRef);
        this._rightTextPortalDataSubject.next(templateRef);
    }

    /**
     * Public method: clearRightTextPortalData.
     *
     * It clears the right text portal data stream.
     *
     * @returns {void} Clears the right text portal data stream.
     */
    clearRightTextPortalData(): void {
        this._rightTextPortalDataSubject.next(null);
    }

}
