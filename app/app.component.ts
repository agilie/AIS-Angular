import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'my-app',
    template: '<pre *ngFor="let post of posts">{{post | json}}</pre>'
})

export class MyComponent {

    posts: any = [];

    constructor(private api: ApiService, http: HttpClient) {
        api.get('/api/users');

        http.get('https://jsonplaceholder.typicode.com/posts', {observe: 'response'})
            .subscribe(resp => this.posts = resp.body);
    }

}