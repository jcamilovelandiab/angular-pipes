import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {

  name: string = 'Hello World!';
  isUppercase: boolean = false;
  heroes: Heroe[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  toggleUppercase(){
    this.isUppercase = !this.isUppercase;
  }

}
