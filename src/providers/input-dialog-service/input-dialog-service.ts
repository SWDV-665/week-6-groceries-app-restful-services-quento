import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor( public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  qty = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please edit an item" : 'Pleas add an item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {          
          name: 'quantity',          
          placeholder: 'Quantity',                             
          value: item ? item.quantity : null,          
        }        
      ],           
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);    
            if (index !== undefined){
              // Edit item to array
              this.dataService.editItem(item,index);
            } else {
              // Add item to array
              this.dataService.addItem(item);
            }       
            
          }
        }
      ]
    });
    prompt.present();
  }

}
