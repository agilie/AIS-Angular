import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./sign_in/sign_in.component";
import {SignUpComponent} from "./sign_up/sign_up.component";
import {AuthComponent} from "./auth/auth.component";
import {FbUserResolver} from "./dashboard/dashboard.resolver";
import {LoggedInGuard, NotLoggedInGuard} from "./services/auth.guard";

export const ROUTES: Routes = [
    {path: '', component: DashboardComponent, resolve: {fbUser: FbUserResolver}, canActivate: [LoggedInGuard]},
    {path: 'sign-in', component: SignInComponent, canActivate: [NotLoggedInGuard]},
    {path: 'sign-up', component: SignUpComponent, canActivate: [NotLoggedInGuard]},
    {path: ':provider/auth', component: AuthComponent}
];