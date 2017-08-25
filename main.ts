import 'zone.js/dist/zone'
import 'reflect-metadata'

import './style.scss';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);