import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home.component').then(c => c.HomeComponent),
    },
];
