import {NgModule, ApplicationRef, APP_BOOTSTRAP_LISTENER} from "@angular/core";
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
import {TransferState} from "./transfer-state/transfer-state";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import {ServerTransferStateModule} from "./transfer-state/server-transfer-state.module";

const TEST_MODE = false;

export function onBootstrap(appRef: ApplicationRef, transferState: TransferState) {
    return () => {
        appRef.isStable
            .filter(stable => stable)
            .first()
            .subscribe(() => {
                transferState.inject();
            });
    };
}

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'ais-angular'
        }),
        ServerTransferStateModule,
        PipesModule, HttpClientModule, RouterModule.forRoot(ROUTES), HttpClientModule],
    declarations: [MyComponent, ShotComponent, DashboardComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: Tokenizer, multi: true},
        {provide: ApiService, useFactory: () => new ApiService('http://dev.domain.com')},
        {
            provide: APP_BOOTSTRAP_LISTENER,
            useFactory: onBootstrap,
            multi: true,
            deps: [
                ApplicationRef,
                TransferState
            ]
        }
    ],
    bootstrap: [MyComponent]
})

export class AppModule {

}