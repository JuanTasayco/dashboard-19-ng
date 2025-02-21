import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";


export const LoginRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "forgot-password",
                component: ForgotPasswordComponent
            },
            {
                path: "**",
                redirectTo: "login"
            }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
]