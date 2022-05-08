import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  PaisModule
} from './Pais/pais.module';
import {
  SharedModule
} from './Shared/shared.module';
import { PaisesMainpageComponent } from './paises-mainpage.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaisesRoutingModule } from './Paises-routing.module';



@NgModule({
  declarations: [
    PaisesMainpageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PaisModule,
    SharedModule,
    PaisesMainpageComponent,
    PaisesRoutingModule

  ]
})
export class PaisesAppModule { }
