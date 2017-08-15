import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class UserModel {

    private fbToken;

    constructor(private http: HttpClient) {

    }

    get facebookToken() {
        return this.fbToken;
    }

    set facebookToken(token) {
        this.fbToken = token;
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