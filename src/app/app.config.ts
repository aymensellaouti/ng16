import { ApplicationConfig, InjectionToken, NgZone, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
export const CV_API_BACKEND = new InjectionToken<string>("CV_API_BACKEND");
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
        provide: CV_API_BACKEND,
        useValue: 'https://apilb.tridevs.net/api/personnes',
    },
    {
        provide: NgZone,
        useValue: new NgZone({ shouldCoalesceEventChangeDetection: false }),
    },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
