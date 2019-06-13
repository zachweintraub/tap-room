import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';

import { PintsPipe } from './pints.pipe';
import { PricePipe } from './price.pipe';
import { StrengthPipe } from './strength.pipe';
import { BreweryPipe } from './brewery.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    EditKegComponent,
    PintsPipe,
    PricePipe,
    StrengthPipe,
    BreweryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
