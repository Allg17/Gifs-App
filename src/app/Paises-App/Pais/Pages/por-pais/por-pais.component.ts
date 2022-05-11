import {
  Component,
  OnInit
} from '@angular/core';
import {
  RESTCountryResponse
} from '../../Interfaces/pais-interface';
import {
  PaisService
} from '../../Services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li{cursor:pointer}`]
})
export class PorPaisComponent {
  termino: string = '';
  HayError: boolean = false;
  Paises: RESTCountryResponse[] = [];
  PaisesSugeridos: RESTCountryResponse[] = [];
  constructor(private paisService: PaisService) { }
  Buscar(termino: string) {
    this.termino = termino;
    this.paisService.BuscarPais(termino).subscribe(result => {
      console.log(result);
      this.HayError = false;
      this.Paises = result;
      this.PaisesSugeridos = [];
      this.termino ="";
    }, err => {
      console.log(err);
      console.info(err);
      this.Paises = [];
      this.HayError = true;
    });
  }

  Sugerencias(termino: string) {
    this.HayError = false;
    this.termino = termino;
    this.paisService.BuscarPais(termino).subscribe(paises => {
      this.PaisesSugeridos = paises.splice(0,5);
    },(err)=> this.PaisesSugeridos = []);
  }
}
