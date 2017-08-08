import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from "./api.service";
import {BroadcasterService} from "./broadcaster.service";

@Component({
    selector: 'my-tag-list',
    template: `<span *ngFor="let tag of tags"
                     (click)="tagClicked(tag)">
        {{tag | uppercase}}
    </span>`
})

export class MyTagList {

    @Input() tags;

    constructor(private bs: BroadcasterService) {

    }

    tagClicked(tag) {
        this.bs.onTagChange(tag)
    }

}