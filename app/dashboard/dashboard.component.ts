import {Component, OnInit} from "@angular/core";
import {ShotService} from "../services/shot.service";
import {TransferState} from "../transfer-state/transfer-state";

@Component({
    selector: 'app-dashboard',
    providers: [ShotService],
    templateUrl: './dashboard.template.html'
})

export class DashboardComponent implements OnInit {

    shots:any = [];

    constructor(private shotService: ShotService, private transferState: TransferState) {

    }

    ngOnInit() {
        if (this.transferState.get('list_of_shots')) {
            this.shots = this.transferState.get('list_of_shots')
        } else {
            this.shotService.listOfShots()
                .subscribe(response => {
                    this.transferState.set('list_of_shots', response['shots']);
                    this.shots = response['shots']
                });
        }
    }

}