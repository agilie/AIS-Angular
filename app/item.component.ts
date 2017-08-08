import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
    selector: 'my-item',
    template: `<p>
        {{item.title}} - 
        <my-tag-list [tags]="item.tags"
                     (tagSelected)="tagChange($event)"></my-tag-list>
    </p>`
})

export class MyItem {

    @Input() item;
    @Output() tagSelected: EventEmitter<any> = new EventEmitter();

    tagChange(tag) {
        this.tagSelected.emit(tag);
    }

}