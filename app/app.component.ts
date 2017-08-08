import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {BroadcasterService} from "./broadcaster.service";

@Component({
    selector: 'my-app',
    template: `<div *ngFor="let item of items">
        <my-item [item]="item"></my-item>
    </div>`
})

export class MyComponent {

    items = [
        {
            title: 'First',
            tags: ['a', 'b', 'c', 'd']
        },
        {
            title: 'Second',
            tags: ['a', 'd']
        },
        {
            title: 'Third',
            tags: ['c', 'd']
        },
        {
            title: 'Forth',
            tags: ['a', ]
        },
        {
            title: 'Fifth',
            tags: ['b', 'd']
        }
    ];

    constructor(private api: ApiService, bs: BroadcasterService) {
        api.get('/api/users');
        bs.tagChanged.subscribe(tag => this.tagSelected(tag))
    }

    tagSelected(tag) {
        alert(`Clicked on tag ${tag}`);
    }

}