import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

// Custom modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SalesModule } from './sales/sales.module';

// Change app's locale
import localEs from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localEs );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
