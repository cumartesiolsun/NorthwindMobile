import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  press: number = 0;
  pan: number = 0;
  swipe: number = 0;
  tap: number = 0;

  pressEvent(e) {
    this.press++;
  }
 
  panEvent(e) {
    this.pan++;
  }

  swipeEvent(e) {
    this.swipe++;
  }
 
  tapEvent(e) {
    this.tap++;
  }

}
