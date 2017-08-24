import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { MyComponent } from './app.component';

@NgModule({
    imports: [
        ServerModule,
        AppModule
    ],
    bootstrap: [MyComponent]
})
export class AppServerModule { }