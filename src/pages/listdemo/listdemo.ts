import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

@IonicPage()
@Component({
  selector: 'page-listdemo',
  templateUrl: 'listdemo.html',
})
export class ListdemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListdemoPage');
  }

}
