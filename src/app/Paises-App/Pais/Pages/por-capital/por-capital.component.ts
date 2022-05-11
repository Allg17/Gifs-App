import { Component, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../Interfaces/pais-interface';
import { PaisService } from '../../Services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

termino: string = '';
HayError: boolean = false;
Paises: RESTCountryResponse[] = [];
constructor(private paisService: PaisService) { }
Buscar(termino: string) {
  this.termino = termino;
  this.paisService.BuscarPorCapital(termino).subscribe(result => {
    console.log(result);
    this.HayError = false;
    this.Paises = result;
  }, err => {
    console.log(err);
    console.info(err);
    this.Paises = [];
    this.HayError = true;
  });
}

Sugerencias(termino: String) {
  this.HayError = false;

}
}
