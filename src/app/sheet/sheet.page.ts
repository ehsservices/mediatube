import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {
  items = [
    {
      text: 'Créer un Short',
      icon: 'videocam-outline',
    },
    {
      text: 'Envoyer une vidéo',
      icon: 'push-outline',
    },
    {
      text: 'En direct',
      icon: 'radio-outline',
    },
    {
      text: 'Ajouter à votre Story',
      icon: 'add-circle-outline',
    },
    {
      text: 'Créer une publication',
      icon: 'create-outline',
    },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
