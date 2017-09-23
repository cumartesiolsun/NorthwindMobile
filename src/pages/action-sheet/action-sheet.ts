import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetController: ActionSheetController,
    public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  openMenu() {
    let actionSheet = this.actionSheetController.create({
      title: 'Actions',
      buttons: [
        {
        text: 'Delete',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          this.delete();
        }
      },
      {
        text: 'Share',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          this.share();
        }
      },
      {
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'heart-outline' : null,
        handler: () => {
          this.favorite();
        }
      }
    ]
    });

    actionSheet.present();
  }



  delete() {
    console.log('Deleted!');
  }

  share() {
    console.log('Shared!');
  }
  favorite() {
    console.log('Add to Favorite!');
  }

}
