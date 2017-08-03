import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {ApiService} from "./api.service";
import {FakeService} from "./fake.service";
import {PipesModule} from "./pipes.module";

const TEST_MODE = false;

@NgModule({
    imports: [BrowserModule, PipesModule],
    declarations: [MyComponent],
    providers: [
        {provide: ApiService, useFactory: () => new ApiService('http://dev.domain.com')},
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}