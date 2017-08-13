import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";

const TEST_MODE = false;

@NgModule({
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES), HttpClientModule],
    declarations: [MyComponent],
    providers: [
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}