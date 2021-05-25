import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {

  name: string = 'Hello World!';
  isUppercase: boolean = false;
  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green lantern',
      fly: true,
      color: Color.green
    }
  ];

  orderBy: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleUppercase(){
    this.isUppercase = !this.isUppercase;
  }

  setOrderBy( value: string ) {
    this.orderBy = value;
  }

}
