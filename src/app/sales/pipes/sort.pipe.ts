import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[], orderBy: string = '' ): Hero[] {
    if( orderBy === '') {
      return heroes;
    }
    switch(orderBy) {
      case 'name':
        return heroes.sort((heroA, heroB) => ( heroA.name > heroB.name ) ? 1 : -1 );
      case 'fly':
        return heroes.sort((heroA, heroB) => ( heroA.fly > heroB.fly) ? -1 : 1 );
      case 'color':
        return heroes.sort((heroA, heroB) => ( heroA.color > heroB.color ) ? 1 : -1 );
      default:
        return heroes;
    }
  }

}
