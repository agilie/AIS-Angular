import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {

    baseUrl = '';

    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    get(path) {
        console.log(`${this.baseUrl}${path}`);
    }
}