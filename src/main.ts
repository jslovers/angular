import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/components/app';
import { environment } from './app/components/environment';
import { APP_ROUTER_PROVIDER } from './app/components/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDER
]);
