import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "strength",
    pure: false
})


export class StrengthPipe implements PipeTransform {
    transform(input: Keg[], desiredStrength) {
        let output: Keg[] = [];
        if(desiredStrength == "strong"){
            for(let i = 0; i < input.length; i++){
                if(input[i].alcoholContent >=6){
                    output.push(input[i]);
                }
            }
        } else if (desiredStrength == "weak") {
            for(let i = 0; i < input.length; i++){
                if(input[i].alcoholContent <6){
                    output.push(input[i]);
                }
            }
        } else {
            output = input;
        }
        return output;
    }
}

