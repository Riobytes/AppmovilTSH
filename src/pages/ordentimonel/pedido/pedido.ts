import { Component, ViewChild } from '@angular/core';
import { UserPage } from '../user/user';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  lista: Array<number> = [1, 2, 3, 4];
  userPage = UserPage;

  @ViewChild('nav') nav: NavController;

  constructor(private modalCtrl: ModalController, private menuCtrl: MenuController,
    private navCtrl: NavController) {

  }

  abrirMenu() {
    this.menuCtrl.open();
  }

  cargar(page: any) {
    this.navCtrl.push(page);
  }

}