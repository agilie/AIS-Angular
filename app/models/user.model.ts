import {Injectable} from "@angular/core";

@Injectable()
export class UserModel {

    private fbToken;

    get facebookToken() {
        return this.fbToken;
    }

    set facebookToken(token) {
        this.fbToken = token;
    }

}