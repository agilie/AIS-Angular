import {Component, OnInit} from "@angular/core";
import {ShotService} from "../services/shot.service";

@Component({
    selector: 'app-dashboard',
    providers: [ShotService],
    templateUrl: 'app/dashboard/dashboard.template.html'
})

export class DashboardComponent implements OnInit {

    constructor(private shotService: ShotService) {

    }

    ngOnInit() {
        this.shotService.listOfShots()
            .subscribe(shots => console.log(shots));
    }

}