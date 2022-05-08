import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  HttpClientModule
} from "@angular/common/http";


import {
  AppComponent
} from './app.component';
import {
  GifsPageModuleModule
} from './Gifs-Page/gifs-page-module.module';
import {
  PaisesAppModule
} from './Paises-App/paises-app.module';
import {
  AppRoutingModule
} from './app-routing.module';
import { IndexPageComponent } from './index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GifsPageModuleModule,
    PaisesAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
