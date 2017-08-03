import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
    selector: 'my-app',
    template: '<h1> {{ myDate | fromNow:true }}</h1>'
})

export class MyComponent {

    myDate = Date.parse('10.10.2015');
    
    constructor(private api: ApiService) {
        api.get('/api/users');
    }

}