import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModule } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
// import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import {AppServerModule} from "./app/app.server.module";

const PORT = 4000;

enableProdMode();

const app = express();

let template = readFileSync('/Users/sergey/own_projects/AIS-Angular/dist/index.html').toString();

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModule(AppServerModule, opts)
        .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'dist');

app.get('*.*', express.static('/Users/sergey/own_projects/AIS-Angular/dist'));

app.get('*', (req, res) => {
    res.render('index', { req });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});