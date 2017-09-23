import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-callnumber',
  templateUrl: 'callnumber.html',
})
export class CallnumberPage {

  numberToCall: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallnumberPage');
  }

  call(someNumber) {
    this.callNumber.callNumber(someNumber, true)
      .then(() => console.log("Calling"))
      .catch(() => console.log("Couldnt call"))
  }

}
