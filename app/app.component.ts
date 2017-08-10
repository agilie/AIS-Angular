import {Component, ViewChild} from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient, HttpEventType} from "@angular/common/http";

import * as jQuery from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css'

@Component({
    selector: 'my-app',
    template: `
        <select #select>
            <option *ngFor="let post of posts" [value]="post">{{post}}</option>
        </select>
    `
})

export class MyComponent {

    @ViewChild('select') select;

    posts: any = ['First', 'Very long element', 'Third', 'Fourth', 'Fifth'];

    constructor() {

    }

    ngAfterViewInit() {
        jQuery(this.select.nativeElement).select2();
    }

}