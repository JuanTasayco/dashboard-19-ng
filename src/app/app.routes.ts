import { Routes } from '@angular/router';
import { DashBoardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("./auth/login.routes").then(m => m.LoginRoutes),
    },
    {
        path: "dashboard",
        loadChildren: () => import("./dashboard/dashboard.routes").then(m => m.DashBoardRoutes),
    },
    {
        path: "**",
        redirectTo: "auth"
    }
];
