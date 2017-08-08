import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MyComponent} from "./app.component";
import {ApiService} from "./api.service";
import {FakeService} from "./fake.service";
import {PipesModule} from "./pipes.module";
import {MyItem} from "./item.component";
import {MyTagList} from "./tag_list.component";

const TEST_MODE = false;

@NgModule({
    imports: [BrowserModule, PipesModule],
    declarations: [MyComponent, MyItem, MyTagList],
    providers: [
        {provide: ApiService, useFactory: () => new ApiService('http://dev.domain.com')},
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}