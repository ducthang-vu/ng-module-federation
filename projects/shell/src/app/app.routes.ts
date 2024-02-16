import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'feature1',
    loadComponent: () => import('./feature1/feature1.component').then((m) => m.Feature1Component)
  },
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule('remote', './Component')
        .then((m) => m.AppComponent)
        .catch(() => import('./error-page/error-page.component').then(m => m.ErrorPageComponent)),
  }
];
