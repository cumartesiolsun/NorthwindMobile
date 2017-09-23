import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  // showAlert() {
  //   let alert = this.alertController.create({
  //     title: 'Save',
  //     subTitle: 'Are you sure?',
  //     buttons: ['Ok','Cancel']
  //   });
  //   alert.present();
  // }

  // showAlert() {
  //   let alert = this.alertController.create({
  //     title: 'Your name?',
  //     message: 'Enter your name.',
  //     inputs: [
  //       {
  //         name: 'firstName',
  //         placeholder: 'First Name'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           this.alertSave(data);
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           this.alertCancel();
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  showAlert() {
    let alert = this.alertController.create();
    alert.setTitle('Choose color!');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text:'Ok',
      handler:data=>{
        console.log(data);
      }
    })

    alert.present();
  }

  alertSave(data) {
    console.log("First name saved! " + data.firstName);
  }
  alertCancel() {
    console.log("Canceled!");
  }
}
