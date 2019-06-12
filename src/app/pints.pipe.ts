import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "pints",
    pure: false
})


export class PintsPipe implements PipeTransform {
    transform(input: Keg[], desiredPints) {
        let output: Keg[] = [];
        if(desiredPints == "Less than 10"){
            for(let i = 0; i < input.length; i++){
                if(input[i].level <= 10){
                    output.push(input[i]);
                }
            }
        } else {
            output = input;
        }
        return output;
    }
}

