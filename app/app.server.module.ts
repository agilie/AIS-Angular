import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { MyComponent } from './app.component';
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        ServerModule,
        AppModule,
    ],
    bootstrap: [MyComponent]
})

export class AppServerModule { }