import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {ApiService} from "./api.service";
import {FakeService} from "./fake.service";
import {PipesModule} from "./pipes.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Tokenizer} from "./api.interceptor";
import {ShotComponent} from "./shot/shot.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {UnlessDirective} from "./directives/unless.directive";
import {FormsModule} from "@angular/forms";
import {PhoneValidator, TemplateForm} from "./template_form/template.form";

const TEST_MODE = false;

@NgModule({
    imports: [
        BrowserModule, PipesModule, HttpClientModule,
        RouterModule.forRoot(ROUTES), HttpClientModule,
        FormsModule],
    declarations: [
        MyComponent, ShotComponent, DashboardComponent, UnlessDirective,
        TemplateForm, PhoneValidator],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: Tokenizer, multi: true},
        {provide: ApiService, useFactory: () => new ApiService('http://dev.domain.com')},
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}