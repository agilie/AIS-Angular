import './style.scss';
import 'jquery';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import {enableProdMode} from "@angular/core";

declare var env:string;

if (env === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);