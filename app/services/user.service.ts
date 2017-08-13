import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    facebook: any = {
        token: null,
        data: {}
    };

    constructor(private http: HttpClient) {

    }

    set facebookToken(token) {
        this.facebook.token = token;
    }

    get facebookToken() {
        return this.facebook.token;
    }

    getMe() {
        let params = new HttpParams()
            .set('access_token', this.facebookToken)
            .set('format', 'json');
        return this.http.get('https://graph.facebook.com/v2.10/me', {params})
    }

    getUserPhotos(user_id) {
        let params = new HttpParams()
            .set('access_token', this.facebookToken)
            .set('fields', 'picture')
            .set('format', 'json');
        return this.http.get(`https://graph.facebook.com/v2.10/${user_id}/photos`, {params});
    }

}