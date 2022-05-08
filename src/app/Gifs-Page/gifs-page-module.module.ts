import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { MainPageComponent } from './main-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    GifsModule
  ],
  exports:[
    
    SharedModule,
    GifsModule,
    MainPageComponent
  ]
})
export class GifsPageModuleModule { }
