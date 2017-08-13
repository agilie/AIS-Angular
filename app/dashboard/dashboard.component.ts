import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/dashboard/dashboard.template.html'
})
export class DashboardComponent {

    userPhotos = [];

    constructor(private route: ActivatedRoute, private user: UserService) {

    }

    ngOnInit() {
        const userId = this.route.snapshot.data['fbUser']['id'];
        this.user.getUserPhotos(userId).subscribe(response => this.userPhotos = response['data']);
    }

}