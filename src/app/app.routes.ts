import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home.component').then(c => c.HomeComponent),
    },
    {
        path: 'reader',
        loadComponent: () =>
            import('./components/reader/reader.component').then(c => c.ReaderComponent),
    },
];
