import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/ruta.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage {
  empleados: Empleado[] = [
    {
      name: 'Juan',
      lasName: 'Perez',
      salary: 1000,
      active: true
    },
    {
      name: 'Maria',
      lasName: 'Lopez',
      salary: 2000,
      active: false
    },
    {
      name: 'Pedro',
      lasName: 'Gomez',
      salary: 3000,
      active: true
    },
    {
      name: 'Luis',
      lasName: 'Gonzalez',
      salary: 4000,
      active: false
    }
  ];

  constructor() { }

}
