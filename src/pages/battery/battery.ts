import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

@IonicPage()
@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html',
})
export class BatteryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryPage');
    this.seeBatteryStatus();
  }

  seeBatteryStatus() {
    let subscription = this.batteryStatus.onChange().subscribe((status: BatteryStatusResponse) => {
        console.log(status.level,status.isPlugged);
    })
  }


}
