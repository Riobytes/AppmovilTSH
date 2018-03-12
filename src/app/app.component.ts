import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { OrdentimonelPage } from '../pages/ordentimonel/ordentimonel';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/ordentimonel/user/user';
import { EmbarcacionPage } from '../pages/ordentimonel/embarcacion/embarcacion';
import { PedidoPage } from '../pages/ordentimonel/pedido/pedido';
import { PropietarioPage } from '../pages/ordentimonel/propietario/propietario';
import { PuertoPage } from '../pages/ordentimonel/puerto/puerto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage = TabsPage;
  rootPage = OrdentimonelPage;
  userPage = UserPage;
  embarcacionPage = EmbarcacionPage;
  pedidoPage = PedidoPage;
  propietarioPage = PropietarioPage;
  puertoPage = PuertoPage;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  cargar(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

}

