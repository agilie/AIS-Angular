import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {UserService} from "../services/user.service";

@Injectable()
export class FbUserResolver implements Resolve<any> {

    constructor(private user: UserService) {
    }

    resolve() {
        return this.user.getMe()
    }
}