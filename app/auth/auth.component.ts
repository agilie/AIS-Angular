import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-auth',
    template: '<div>I am auth</div>'
})
export class AuthComponent {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        const token = this.route.snapshot.fragment.match(/access_token=(\w+?)&/)[1]
    }

}