import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
        path: 'cv',
        loadChildren: () =>
          import('./cv/cv.routes').then((routes) => routes.CvRoutes),
  },
];
