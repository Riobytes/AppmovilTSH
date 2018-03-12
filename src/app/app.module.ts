import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//importacionde para el uso de las paginas
import { MyApp } from './app.component';
import { OrdentimonelPage } from '../pages/ordentimonel/ordentimonel';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/ordentimonel/user/user';
import { EmbarcacionPage } from '../pages/ordentimonel/embarcacion/embarcacion';
import { PedidoPage } from '../pages/ordentimonel/pedido/pedido';
import { PropietarioPage } from '../pages/ordentimonel/propietario/propietario';
import { PuertoPage } from '../pages/ordentimonel/puerto/puerto';

@NgModule({
  declarations: [
    MyApp,
    OrdentimonelPage,
    TabsPage,
    UserPage,
    EmbarcacionPage,
    PedidoPage,
    PropietarioPage,
    PuertoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrdentimonelPage,
    TabsPage,
    UserPage,
    EmbarcacionPage,
    PedidoPage,
    PropietarioPage,
    PuertoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
