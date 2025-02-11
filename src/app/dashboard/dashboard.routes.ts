import { Routes } from "@angular/router";
import { Test1Component } from "./pages/test1/test1.component";
import { HomeComponent } from "./pages/home/home.component";

export const DashBoardRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [{
            path: "test1",
            component: Test1Component
        },
        {
            path: "test2",
            component: Test1Component
        },
        {
            path: "test3",
            component: Test1Component
        },
        {
            path: "test4",
            component: Test1Component
        },
        {
            path: "**",
            redirectTo: "test1"
        }
        ]
    }
]