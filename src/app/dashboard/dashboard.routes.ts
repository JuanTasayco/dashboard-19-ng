import { Routes } from "@angular/router";
import { Test1Component, Test2Component, Test3Component, Test4Component } from "./pages/index";
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
            component: Test2Component
        },
        {
            path: "test3",
            component: Test3Component
        },
        {
            path: "test4",
            component: Test4Component
        },
        {
            path: "**",
            redirectTo: "test1"
        }
        ]
    }
]