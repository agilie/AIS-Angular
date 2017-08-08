import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class BroadcasterService {

    tagChanged: EventEmitter<any> = new EventEmitter();

    onTagChange(selectedTag) {
        this.tagChanged.emit(selectedTag);
    }

}