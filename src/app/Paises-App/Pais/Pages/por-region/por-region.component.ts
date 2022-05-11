import { RESTCountryResponse } from '../../Interfaces/pais-interface';
import { PaisService } from '../../Services/pais.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: []
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  Paises: RESTCountryResponse[] = [];
  constructor(private paisservice: PaisService) { }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.Paises = [];
    this.regionActiva = region;
    this.paisservice.BuscarPaisPorRegion(region).subscribe(result => {
      this.Paises = result;
    });
  }
  getClasesCss(region: string): string {
    if (region == this.regionActiva) {
      return 'btn btn-primary';
    }
    else {
      return 'btn btn-outline-primary';
    }
  }

}
