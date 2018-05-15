import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeseosProvider } from "../../providers/deseos/deseos";

/**
 * Generated class for the PendientsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-pendients',
  templateUrl: 'pendients.html',
})
export class PendientsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public deseosProvider: DeseosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientsPage');
  }

}
