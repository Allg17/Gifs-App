import { Component, Input, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../Interfaces/pais-interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent  {
  @Input() pais =   <RESTCountryResponse[] >{};
  constructor() { }
  


}
