import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {
    
    transform( value : string, isUppercase: boolean = true ): string {
        return ( isUppercase ) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
    }

}