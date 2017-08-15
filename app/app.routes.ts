import {Routes} from "@angular/router";
import {SigninComponent} from "./sign-in/signin.component";
import {AuthComponent} from "./auth/auth.component";

export const ROUTES: Routes = [
    {path: 'sign-in', component: SigninComponent},
    {path: ':provider/auth', component: AuthComponent},
];