import {Component} from "@angular/core";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: 'app/auth/auth.template.html'
})
export class AuthComponent {

    constructor(private user: UserService,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        console.log('this.route.snapshot.fragment');
        this.user.facebookToken = this.route.snapshot.fragment.match(/access_token=(\w+?)&/)[1];
        console.log(this.user.facebookToken);
        this.router.navigate(['/']);
    }
}