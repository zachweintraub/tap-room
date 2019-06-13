import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "price",
    pure: false
})


export class PricePipe implements PipeTransform {
    transform(input: Keg[], desiredPrice) {
        let output: Keg[] = [];
        if(desiredPrice == "budget"){
            for(let i = 0; i < input.length; i++){
                if(input[i].price <= 5){
                    output.push(input[i]);
                }
            }
        } else if (desiredPrice == "premium"){
            for(let i = 0; i < input.length; i++){
                if(input[i].price > 5){
                    output.push(input[i]);
                }
            }
        } else {
            output = input;
        }
        return output;
    }
}

