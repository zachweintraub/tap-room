import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();
  @Output() clickDelete = new EventEmitter();

  deleteClicked(deleteKeg: Keg) {
    this.clickDelete.emit(deleteKeg);
  }

  editButtonClicked(keg: Keg) {
    this.clickSender.emit(keg);
  }

  filterByPintsLeft: string = "allKegs";

  onPintsChange(optionFromMenu) {
    this.filterByPintsLeft = optionFromMenu;
  }

  sellButtonClicked(keg:Keg) {
    this.sellSender.emit(keg);
  }

  filterByPrice: string = "allKegs";

  onPriceChange(optionFromMenu) {
    this.filterByPrice = optionFromMenu;
  }

  filterByStrength: string = "allKegs";

  onAlcoholChange(optionFromMenu) {
    this.filterByStrength = optionFromMenu;
  }

  filterByBrewery: string = "allKegs";

  onBreweryChange(optionFromMenu) {
    this.filterByBrewery = optionFromMenu;
  }

}
