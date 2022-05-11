import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { RESTCountryResponse } from '../../Interfaces/pais-interface';
import { PaisService } from '../../Services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:RESTCountryResponse;
  constructor(private ActivatedRoute: ActivatedRoute, private paisservice: PaisService) { }

  ngOnInit(): void {

    this.ActivatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisservice.BuscarPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(resp => {
        this.pais = resp;
      });

    // this.ActivatedRoute.params.subscribe(({ id }) => {
    //   this.paisservice.BuscarPaisPorCodigo(id).subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
  }

}
