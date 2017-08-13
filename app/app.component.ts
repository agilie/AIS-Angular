import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `
})

export class MyComponent {

    constructor() {

    }


}