import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent implements OnInit {

  //i18nSelect
  name: string = 'Camilo';
  gender: string = 'male';
  genderMap = {
    'male': 'man',
    'female': 'woman'
  };

  //i18nPlural
  customers: string[] = ['Michael', 'Jess', 'Frank', 'Joan', 'Sara'];
  customersMap = {
    '=0': 'no customers on hold.',
    '=1': 'a customer on hold.',
    'other': '# customers on hold.'
  };

  //key value pipe
  person = {
    name: 'Camilo',
    age: 22,
    address: 'Ottawa, Canada'
  }

  //json pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Batman',
      fly: false
    },
    {
      name: 'Acuaman',
      fly: false
    }
  ];

  constructor( private primengConfig: PrimeNGConfig ) {}
  
  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  changePerson(){
    this.name = 'Tess';
    this.gender = 'female';
  }

  deleteCustomer() {
    this.customers.shift();
  }

}
