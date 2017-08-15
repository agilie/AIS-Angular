import {Routes} from "@angular/router";
import {SigninComponent} from "./sign-in/signin.component";
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'sign-in', component: SigninComponent},
    {path: ':provider/auth', component: AuthComponent},
];