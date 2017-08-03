import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular! 2 + 2 = {{ 2 + 2 }}</h1>'
})

export class MyComponent {
    
    constructor(private api: ApiService) {
        api.get('/api/users');
    }

}