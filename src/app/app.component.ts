import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  masterKegList: Keg[] = [
    new Keg('Beer', 'Olympia', 2.50, 4.78),
    new Keg('Mirror Pond Pale Ale', 'Deschutes', 5, 5.4),
    new Keg('Bad Timing', 'Cloudburst', 6.7, 7)
  ];

  selectedKeg: Keg = null;
  
  editKeg(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
}