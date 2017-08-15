import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../models/user.model";

@Component({
    selector: 'app-auth',
    template: '<div>I am auth</div>'
})
export class AuthComponent {

    constructor(private route: ActivatedRoute,
                private user: UserModel,
                private router: Router
    ) {

    }

    ngOnInit() {
        const token = this.route.snapshot.fragment.match(/access_token=(\w+?)&/)[1];
        this.user.facebookToken = token;
        this.router.navigate(['/']);
    }

}