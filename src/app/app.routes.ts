import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: ':movieTitle/details', loadComponent: () => import('./movie-details/movie-details.component').then(m => m.MovieDetailsComponent)}
];
