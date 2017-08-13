import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router, private user: UserService) {
    }

    canActivate() {
        const loggedIn = !!this.user.facebookToken;
        if (!loggedIn) {
            this.router.navigate(['/sign-in']);
        }
        return loggedIn;
    }

}

@Injectable()
export class NotLoggedInGuard implements CanActivate {

    constructor(private router: Router, private user: UserService) {
    }

    canActivate() {
        const loggedIn = !!this.user.facebookToken;
        if (loggedIn) {
            this.router.navigate(['/']);
        }
        return !loggedIn;
    }

}