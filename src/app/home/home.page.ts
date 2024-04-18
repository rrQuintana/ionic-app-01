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
    },
    {
      route: '/chip',
      name: 'Chips',
      color: 'secondary',
      icon: 'ellipse'
    },
    {
      route: '/avatar',
      name: 'Avatar',
      color: 'tertiary',
      icon: 'person'
    },
    {
      route: '/list',
      name: 'List',
      color: 'success',
      icon: 'list'
    },
    {
      route: '/datetime',
      name: 'Datetime',
      color: 'warning',
      icon: 'calendar'
    },
    {
      route: '/picker',
      name: 'Picker',
      color: 'danger',
      icon: 'arrow-dropdown'
    },
    {
      route: '/items',
      name: 'Items',
      color: 'primary',
      icon: 'list'
    },
    {
      route: '/fab',
      name: 'Fab',
      color: 'secondary',
      icon: 'add'
    },
    {
      route: '/example',
      name: 'Example',
      color: 'tertiary',
      icon: 'code'
    },
    {
      route: '/ecommerce',
      name: 'Ecommerce',
      color: 'success',
      icon: 'cart'
    },
    {
      route: '/input',
      name: 'Input',
      color: 'warning',
      icon: 'create'
    },
    {
      route: '/examen',
      name: 'Examen',
      color: 'danger',
      icon: 'create'
    }
  ];

  constructor() {}

}