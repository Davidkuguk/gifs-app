import { Component } from '@angular/core';

interface MenuOption{
  label: string;
  sublabel: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent { }
