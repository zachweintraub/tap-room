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
    new Keg('Bad Timing', 'Cloudburst', 7, 6.7)
  ];

  selectedKeg: Keg = null;
  
  editKeg(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }

  deleteKeg(clickedKeg: Keg) {
    for(let i = 0; i < this.masterKegList.length; i++) {
      if(clickedKeg.name == this.masterKegList[i].name && clickedKeg.brand == this.masterKegList[i].brand) {
        this.masterKegList.splice(i, 1);
      }
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  sellPint(keg: Keg) {
    if (keg.level > 0) {
        keg.level -= 1;
    }
}
}