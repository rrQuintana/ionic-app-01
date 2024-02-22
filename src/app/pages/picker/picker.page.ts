import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage {

  constructor(
    private _pickerCtrl: PickerController
  ) { }

  async selectPizza() {
    const picker = await this._pickerCtrl.create(
      {
        columns: [
          {
            name: 'Pizza',
            options: [
              { text: 'Pepperoni', value: 'pepperoni' },
              { text: 'Sausage', value: 'sausage' },
              { text: 'Mushroom', value: 'mushroom' },
              { text: 'Pepper', value: 'pepper' },
              { text: 'Onion', value: 'onion' },
              { text: 'Cheese', value: 'cheese' }
            ]
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Ok'
          }
        ]
      }

      )
      await picker.present();
  }

  async selectBurguer() {
    const picker = await this._pickerCtrl.create(
      {
        columns: [
          {
            name: 'Burguer',
            options: [
              { text: 'Chicken', value: 'chicken' },
              { text: 'Beef', value: 'beef' },
              { text: 'Pork', value: 'pork' },
              { text: 'Fish', value: 'fish' },
              { text: 'Vegan', value: 'vegan' }
            ]
          },
          {
            name: 'Toppings',
            options: [
              { text: 'Lettuce', value: 'lettuce' },
              { text: 'Tomato', value: 'tomato' },
              { text: 'Onion', value: 'onion' },
              { text: 'Pickles', value: 'pickles' },
              { text: 'Cheese', value: 'cheese' }
            ]
          },
          {
            name: 'Sauce',
            options: [
              { text: 'Ketchup', value: 'ketchup' },
              { text: 'Mustard', value: 'mustard' },
              { text: 'Mayo', value: 'mayo' },
              { text: 'BBQ', value: 'bbq' },
              { text: 'Ranch', value: 'ranch' }
            ]
          
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Ok',
            handler: (value) => {
              console.log(value);
            }
          }
        ]
      }

      )
      await picker.present();
  }

}
