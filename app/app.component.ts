import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
    selector: 'my-app',
    template: '<pre *ngFor="let post of posts">{{post | json}}</pre>'
})

export class MyComponent {

    posts: any = [];

    constructor(private api: ApiService, http: HttpClient) {
        api.get('/api/users');

        http.get('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x21600x21600.D2.png',
            {
                observe: 'events',
                reportProgress: true
            })
            .subscribe(resp => {
                if (resp.type == HttpEventType.DownloadProgress) {
                    console.log(`Loaded: ${Math.round( 100 *resp.loaded / resp.total)}`);
                } else if (resp.type == 4) {
                    console.log('All done');
                }
            });
    }

}