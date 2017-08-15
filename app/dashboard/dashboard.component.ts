import {Component} from "@angular/core";
import {UserModel} from "../models/user.model";

@Component({
    selector: 'app-dashboard',
    template: `<div *ngFor="let photo of userPhotos">
        <img [src]="photo.picture" alt="">
    </div>`
})
export class DashboardComponent {

    userPhotos:any = [];

    constructor(private user: UserModel) {

    }

    ngOnInit() {
        this.user.getMe().subscribe(
            response => this.user.getUserPhotos(response['id'])
                .subscribe(response => this.userPhotos = response['data'])
        )
    }


}