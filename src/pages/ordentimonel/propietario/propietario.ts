import { Component, ViewChild } from '@angular/core';
import { UserPage } from '../user/user';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-propietario',
  templateUrl: 'propietario.html',
})
export class PropietarioPage {

  lista: Array<number> = [1, 2, 3, 4];
  peliculas = [
    {
      "pelicula": "Batman v. Superman",
      "director": "Zack Snider",
      "anio": "2016",
      "dia":"1"
    },
    {
      "pelicula": "La verdad duele",
      "director": "Will Smith",
      "anio": "2015",
      "dia":"3"
    },
    {
      "pelicula": "Una historia real",
      "director": "Desconocido",
      "anio": "2014",
      "dia":"5"
    }];
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