import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {SigninComponent} from "./sign-in/signin.component";
import {AuthComponent} from "./auth/auth.component";
import {UserModel} from "./models/user.model";

const TEST_MODE = false;

@NgModule({
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES), HttpClientModule],
    declarations: [MyComponent, SigninComponent, AuthComponent],
    providers: [
        UserModel
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}