import { Routes } from '@angular/router';

export const CvRoutes: Routes = [
      {
        path: '',
        loadComponent: () =>
          import('./cv/cv.component').then((comp) => comp.CvComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./add/add.component').then((comp) => comp.AddComponent),
      },
];
