import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ShotService {

    constructor(private http: HttpClient) {

    }

    listOfShots() {
        return this.http.get('http://dev-api.mobile.design/api/shots')
    }

    onShot(shotId) {
        return this.http.get(`http://dev-api.mobile.design/api/shots/${shotId}`)
    }

}