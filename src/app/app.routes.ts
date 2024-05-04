import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dublin',
    loadComponent: () => import('./dublin/dublin.page').then( m => m.DublinPage)
  },
  {
    path: 'belfast',
    loadComponent: () => import('./belfast/belfast.page').then( m => m.BelfastPage)
  },
  {
    path: 'galsettings',
    loadComponent: () => import('./galsettings/galsettings.page').then( m => m.GalsettingsPage)
  },
  {
    path: 'belsettings',
    loadComponent: () => import('./belsettings/belsettings.page').then( m => m.BelsettingsPage)
  },
  {
    path: 'dubsettings',
    loadComponent: () => import('./dubsettings/dubsettings.page').then( m => m.DubsettingsPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
];
