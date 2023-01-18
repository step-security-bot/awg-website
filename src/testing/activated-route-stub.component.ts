import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStubComponent {
    // Use a ReplaySubject to share previous values with subscribers
    // And pump new values into the `paramMap` observable
    private _subject = new ReplaySubject<ParamMap>();

    /**
     * The mock paramMap observable
     */
    // eslint-disable-next-line @typescript-eslint/member-ordering, @typescript-eslint/naming-convention
    readonly paramMap = this._subject.asObservable();

    constructor(initialParams?: Params) {
        this.setParamMap(initialParams);
    }

    /** Set the paramMap observables's next value */
    setParamMap(params?: Params) {
        this._subject.next(convertToParamMap(params));
    }
}
