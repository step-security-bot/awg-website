import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PortalService {
    /**
     * Private subject to handle right text portal data.
     */
    private _rightPanelPortalDataSubject: Subject<TemplateRef<unknown>> =
        new BehaviorSubject<TemplateRef<unknown> | null>(null);

    /**
     * Readonly right text portal data stream as observable (`Subject`).
     */
    private readonly _rightPanelPortalDataStream$ = this._rightPanelPortalDataSubject.asObservable();

    /**
     * Public method: getRightPanelPortalData.
     *
     * It provides the latest data from the right text portal data stream.
     *
     * @returns {Observable<TemplateRef<unknown>>} The right text portal data stream as observable.
     */
    getRightPanelPortalData(): Observable<TemplateRef<unknown>> {
        return this._rightPanelPortalDataStream$;
    }

    /**
     * Public method: updateRightPanelPortalData.
     *
     * It updates the right text portal data stream with the given data (`templateRef`).
     *
     * @returns {void} Sets the next templateRef to the right text portal data stream.
     */
    updateRightPanelPortalData(templateRef: TemplateRef<unknown>): void {
        this._rightPanelPortalDataSubject.next(templateRef);
    }

    /**
     * Public method: clearRightPanelPortalData.
     *
     * It clears the right text portal data stream.
     *
     * @returns {void} Clears the right text portal data stream.
     */
    clearRightPanelPortalData(): void {
        this._rightPanelPortalDataSubject.next(null);
    }
}
