import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent{
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(keg: Keg) {
    this.clickSender.emit(keg);
  }

  filterByPintsLeft: string = "allKegs"

  onPintsChange(optionFromMenu){
    this.filterByPintsLeft = optionFromMenu;
  }

}
