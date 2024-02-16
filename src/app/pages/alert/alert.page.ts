import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alumno } from 'src/app/interfaces/ruta.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  misAlumnos: Alumno[] = []

  constructor(
    private alertCtrl: AlertController
  ) { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
    });

    await alert.present();
  }

  async presentAlertWithButtons() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          console.log('Click en Aceptar');
        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Click en Cancelar');
        }
      }],
    });

    await alert.present();
  }

  async selectPizza() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Selecciona tu pizza',
      inputs: [
        {
          name: 'pizza',
          type: 'radio',
          label: 'Pepperoni',
          value: 'pepperoni',
          checked: true
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Margarita',
          value: 'margarita'
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Hawaiana',
          value: 'hawaiana'
        },
        {
          name: 'pizza',
          type: 'radio',
          label: 'Mexicana',
          value: 'mexicana'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }

  async login() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Login',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ingresar',
          cssClass: 'primary'
        }
      ]
    })

    await alert.present();
  }

  async register() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Registro',
      inputs: [
        {
          label: 'Nombre del alumno',
          type: 'text',
          placeholder: 'Escribe tu nombre',
          name: 'nombre'
        },
        {
          label: 'Matrícula',
          type: 'text',
          placeholder: 'Escribe tu matrícula',
          name: 'matricula'
        },
        {
          label: 'Correo',
          type: 'email',
          placeholder: 'example@ulsaoaxaca.edu.mx',
          name: 'correo'
        },
        {
          label: 'Contraseña',
          type: 'password',
          placeholder: 'Password',
          name: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }, {
          text: 'Registrar',
          cssClass: 'primary',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.misAlumnos.push(data);
            console.log(this.misAlumnos);
          }
        }
      ]
    });

    await alert.present();
  }

  async eliminarAlumno(index: number) {
    const alertConfirm = await this.alertCtrl.create({
      mode: 'ios',
      cssClass: 'alert-confirm',
      header: 'Eliminar alumno',
      message: '¿Estás seguro de eliminar a este alumno?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Eliminar',
          cssClass: 'danger',
          handler: () => {
            console.log('Click en Eliminar');
            this.misAlumnos.splice(index, 1);
          }
        }
      ]
    });

    await alertConfirm.present();
  }
}
