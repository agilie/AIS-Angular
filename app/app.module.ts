import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./sign_in/sign_in.component";
import {SignUpComponent} from "./sign_up/sign_up.component";
import {AuthComponent} from "./auth/auth.component";
import {UserService} from "./services/user.service";
import {FbUserResolver} from "./dashboard/dashboard.resolver";
import {LoggedInGuard, NotLoggedInGuard} from "./services/auth.guard";

@NgModule({
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES), HttpClientModule],
    declarations: [MyComponent, DashboardComponent, SignInComponent, SignUpComponent, AuthComponent],
    providers: [
        UserService, FbUserResolver, LoggedInGuard, NotLoggedInGuard
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}