import {Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../../components/side-menu-options/side-menu-options.component';
import { GifsSideMenu } from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet,  GifsSideMenu],
  standalone:true,
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
