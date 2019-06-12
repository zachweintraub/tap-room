import { AppComponent } from './../app.component';

export class Keg {
    public level: number = 12;
    constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}

    sellPint() {
        if(this.level > 0) {
            this.level -= 1;
        }
    }
}