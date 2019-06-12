import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {

  constructor() {}

  @Input() childSelectedKeg: Keg;
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit(null);
  }

  saveButtonClicked() {
    console.log('saving');
  }


  deleteKeg(selectedKeg: Keg) {
    console.log('deleting');
  }
}