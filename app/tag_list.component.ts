import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
    selector: 'my-tag-list',
    template: `<span *ngFor="let tag of tags"
                     (click)="tagClicked(tag)">
        {{tag | uppercase}}
    </span>`
})

export class MyTagList {

    @Input() tags;
    @Output() tagSelected: EventEmitter<any> = new EventEmitter();

    tagClicked(tag) {
        this.tagSelected.emit(tag)
    }

}