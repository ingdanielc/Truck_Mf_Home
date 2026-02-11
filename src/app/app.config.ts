import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { routes } from './app.routes';
import { httpHeadersInterceptor } from './services/http-headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpHeadersInterceptor])),
    CookieService,
    { provide: APP_BASE_HREF, useValue: '/gym' },
  ],
};
