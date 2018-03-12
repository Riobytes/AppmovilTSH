import { Component } from '@angular/core';
import { OrdentimonelPage } from "../ordentimonel/ordentimonel";
import { EmbarcacionPage } from '../ordentimonel/embarcacion/embarcacion';


@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs>
    <ion-tab [root]="ordenTimonel" tabTitle="Orden Servicio"></ion-tab>
    <ion-tab [root]="embacacion" tabTitle="Embarcación"></ion-tab>
    </ion-tabs>
    `
})

export class TabsPage {
    ordenTimonel = OrdentimonelPage;
    embacacion = EmbarcacionPage;
}