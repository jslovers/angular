import { provideRouter, RouterConfig } from '@angular/router';
import { Home } from './home';
import { AboutUs } from './about';

export const appRoutes: RouterConfig = [
    {
        path: "", component: Home
    },
    {
        path: "about-us", component: AboutUs
    }
];
export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);