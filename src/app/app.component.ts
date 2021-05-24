import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Camilo';
  title = 'angular-pipesApp';
  value = 1000;
  jsonObject: any = {
    name: 'hey there'
  }
}
