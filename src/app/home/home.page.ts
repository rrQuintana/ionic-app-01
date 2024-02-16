import { Component } from '@angular/core';
import { routeComponent } from '../interfaces/route.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = "Roberto";

  menu: routeComponent[] = [
    {
      route: '/action-sheet',
      name: 'Action Sheet',
      icon: 'rocket',
      color: 'success'
    },
    {
      route: '/alert',
      name: 'Alert',
      color: 'danger',
      icon: 'information-circle'
    },
    {
      route: '/buttons',
      name: 'Buttons',
      color: 'warning',
      icon: 'square'
    },
    {
      route: '/card',
      name: 'Card',
      color: 'primary',
      icon: 'card'
    }
  ];

  constructor() {}

}