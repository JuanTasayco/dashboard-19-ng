import { Routes } from '@angular/router';
import { DashBoardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
    {
        path: "dashboard",
        loadChildren: () => import("./dashboard/dashboard.routes").then(m => m.DashBoardRoutes),
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
