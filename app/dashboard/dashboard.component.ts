import {Component, OnInit} from "@angular/core";
import {ShotService} from "../services/shot.service";

@Component({
    selector: 'app-dashboard',
    providers: [ShotService],
    templateUrl: './dashboard.template.html'
})

export class DashboardComponent implements OnInit {

    shots:any = [];

    constructor(private shotService: ShotService) {

    }

    ngOnInit() {
        this.shotService.listOfShots()
            .subscribe(response => this.shots = response['shots']);
    }

}