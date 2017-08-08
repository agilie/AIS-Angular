import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {ApiService} from "./api.service";
import {FakeService} from "./fake.service";
import {PipesModule} from "./pipes.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Tokenizer} from "./api.interceptor";

const TEST_MODE = false;

@NgModule({
    imports: [BrowserModule, PipesModule, HttpClientModule],
    declarations: [MyComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: Tokenizer, multi: true},
        {provide: ApiService, useFactory: () => new ApiService('http://dev.domain.com')},
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}