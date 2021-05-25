import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {

  name: string = 'Hello World!';
  isUppercase: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleUppercase(){
    this.isUppercase = !this.isUppercase;
  }

}
