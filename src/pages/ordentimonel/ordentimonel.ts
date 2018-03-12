import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { MenuController } from 'ionic-angular';
import { UserPage } from '../ordentimonel/user/user';

@IonicPage()
@Component({
  selector: 'page-ordentimonel',
  templateUrl: 'ordentimonel.html',
})
export class OrdentimonelPage {

  userPage = UserPage;
  @ViewChild('nav') nav: NavController;

  constructor(private modalCtrl: ModalController, private menuCtrl: MenuController,
    private navCtrl: NavController) {

  }

  cargar(page: any) {
    this.navCtrl.push(page);
  }

}
