import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ShotComponent} from "./shot/shot.component";

export const ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'shots/:shotId', component: ShotComponent}
];