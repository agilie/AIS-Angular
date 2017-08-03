import {Injectable} from "@angular/core";

@Injectable()
export class FakeService {

    get() {
        console.log('I am fake service');
    }
}