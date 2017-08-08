import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
    selector: 'my-app',
    template: `
        <pre *ngFor="let post of posts">{{post | json}}</pre>
    `
})

export class MyComponent {

    posts: any = [];

    constructor(private api: ApiService, http: HttpClient) {
        api.get('/api/users');

        http.get('https://jsonplaceholder.typicode.com/posts', {responseType: 'arraybuffer'})
            .subscribe(resp => {
                const blob = new Blob([resp]);

                const url = window.URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.setAttribute('href', url);
                link.setAttribute('download', 'my_file_name');
                link.click();
            });
    }

}