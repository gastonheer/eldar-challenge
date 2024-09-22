import { Routes } from '@angular/router';
import { NavigationPages } from './features/common/navigationPages';
import { LoginComponent } from './features/login/pages/login.component';
import { HomeComponent } from './features/home/pages/home.component';
import { HomeGuard } from './features/app.routing-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: NavigationPages.LOGIN,
        pathMatch: 'full',
    },
    {
        path: NavigationPages.LOGIN,
        component: LoginComponent,
        pathMatch: 'full',
    },
    {
        path: NavigationPages.HOME,
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [HomeGuard]
    },
];
