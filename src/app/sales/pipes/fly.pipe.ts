import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fly'
})
export class FlyPipe implements PipeTransform{
    
    transform( value: any ) {
        return ( value ) ? 'does fly' : 'does not fly';
    }

}