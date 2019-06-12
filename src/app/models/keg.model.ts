import { AppComponent } from './../app.component';

export class Keg {
    public level: number = 124;
    constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}
}
