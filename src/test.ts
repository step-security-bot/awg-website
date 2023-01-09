/* eslint-disable @typescript-eslint/member-ordering */
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// For custom matchers, see https://stackoverflow.com/a/44996479
import '@testing/custom-matchers';

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: true },
});
