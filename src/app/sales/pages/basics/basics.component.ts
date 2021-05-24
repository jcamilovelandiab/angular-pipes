import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  lowercaseName: string = 'camilo';
  uppercaseName: string = 'CAMILO';
  fullName: string = 'cAmIlO vElAndIa';

  constructor() { }

}
