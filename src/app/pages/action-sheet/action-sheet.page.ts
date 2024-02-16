import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  async openActionSheet() {
    console.log('openActionSheet');
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action Sheet',
      subHeader: 'This is an Action Sheet',
      backdropDismiss: false,
      buttons: [ {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
        
      }]
    });

    await actionSheet.present();
  }

  async openActionSheet2(name: string) {
    console.log('openActionSheet2');

    const actionSheet = await this.actionSheetCtrl.create({
      header: name,
      subHeader: 'This is an Action Sheet',
      cssClass: 'my-action-sheet',
      buttons: [ {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Call',
        icon: 'call',
        handler: () => {
          console.log('Call clicked');
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          console.log('Edit clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }
}
