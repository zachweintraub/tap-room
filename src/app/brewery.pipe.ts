import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "brewery",
    pure: false
})


export class BreweryPipe implements PipeTransform {
    transform(input: Keg[], desiredBrewery) {
        let output: Keg[] = [];
        if(desiredBrewery == 'allKegs') {
            output = input;
        } else {
            for (let i = 0; i < input.length; i++) {
                if (input[i].brand == desiredBrewery) {
                    output.push(input[i]);
                }
            }
        }
        return output;
    }
}

