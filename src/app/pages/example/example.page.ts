import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserExample } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage {

  constructor(
    private alertCtrl: AlertController
  ) { }

  usersExample: UserExample[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'leanne@mail.com',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      company: {
        name: 'Romaguera-Crona',
        location: 'Multan'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'ervin@mail.com',
      phone: '010-692-6593',
      website: 'anastasia.net',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      company: {
        name: 'Deckow-Crist',
        location: 'Lahore'
      }
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'clementine@mail.com',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      company: {
        name: 'Romaguera-Jacobson',
        location: 'Karachi'
      }
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'patricia@mail.com',
      phone: '493-170-9623',
      website: 'kale.biz',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      company: {
        name: 'Robel-Corkery',
        location: 'Islamabad'
      }
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'chelsey@mail.com',
      phone: '(254)954-1289',
      website: 'demarco.info',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      company: {
        name: 'Keebler LLC',
        location: 'Faisalabad'
      }
    },
    {
      id: 6,
      name: 'Dennis Schulist',
      email: 'dennis@mail.com',
      phone: '1-477-935-8478',
      website: 'ola.org',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      company: {
        name: 'Considine-Lockman',
        location: 'Rawalpindi'
      }
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'kurtis@mail.com',
      phone: '210.067.6132',
      website: 'elvis.io',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      company: {
        name: 'Johns Group',
        location: 'Sialkot'
      }
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'nicholas@mail.com',
      phone: '586.493.6943',
      website: 'jacynthe.com',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      company: {
        name: 'Abernathy Group',
        location: 'Quetta'
      }
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'glenna@mail.com',
      phone: '(775)976-6794',
      website: 'conrad.com',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      company: {
        name: 'Yost and Sons',
        location: 'Peshawar'
      }
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'clementina@mail.com',
      phone: '024-648-3804',
      website: 'ambrose.net',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      company: {
        name: 'Hoeger LLC',
        location: 'Hyderabad'
      }
    }
  ];
  

  async presentAlertWithButtons(index: number) {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Estás seguro de eliminar este usuario?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.usersExample.splice(index, 1);
        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Click en cancelar');
        }
      }],
    });

    await alert.present();
  }

  async presentAlert(user: UserExample) {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: `Teléfono: ${user.phone} || Website: ${user.website} || Company: ${user.company.name} || Location: ${user.company.location}`,
    });

    await alert.present();
  }
}
