import {PipeTransform, Pipe} from "@angular/core";
import * as moment from 'moment';

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform {

    transform(value, suffix?) {
        return moment(value).fromNow(suffix)
    }

}