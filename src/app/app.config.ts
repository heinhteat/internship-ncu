import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
<<<<<<< HEAD
=======
    provideHttpClient(withInterceptors([authInterceptor])),
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
    HttpClient
  ]
};
