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
  customers: string[] = ['Michael', 'Jess'];
  customersMap = {
    '=0': 'no customers on hold.',
    '=1': 'a customer on hold.',
    'other': '# customers on hold.'
  };

  constructor( private primengConfig: PrimeNGConfig ) {}
  
  ngOnInit(){
    this.primengConfig.ripple = true;
  }

}
