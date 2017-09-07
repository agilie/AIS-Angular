import {APP_BOOTSTRAP_LISTENER, ApplicationRef, NgModule} from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { MyComponent } from './app.component';
import {ServerTransferStateModule} from "./transfer-state/server-transfer-state.module";
import {TransferState} from "./transfer-state/transfer-state";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';



@NgModule({
    imports: [
        ServerModule,
        AppModule,
    ],
    bootstrap: [MyComponent]
})
export class AppServerModule { }