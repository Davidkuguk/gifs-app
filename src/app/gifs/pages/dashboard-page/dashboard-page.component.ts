import {Component } from '@angular/core';
import { RouterOutlet } from "../../../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
