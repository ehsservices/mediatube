import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import homeData from '../../assets/data/home.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  videos = [];
  segments: any[] = [];

  constructor() {
    this.segments = [
      'Tous',
      'Nouveautés',
      'Jeux',
      'Sitcoms',
      'PC',
      'Documentaires',
      'Musique',
    ].map((val) => ({
      title: val,
      selected: false,
    }));
    setTimeout(() => {
      this.selectSegment(0);
      this.videos = homeData;
    }, 1000);
  }

  doRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  selectSegment(i) {
    this.segments.map((item) => (item.selected = false));
    this.segments[i].selected = true;
  }

}
