import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private _Sgifs: GifsService) { }

  ngOnInit(): void {
  }
  @ViewChild('textbuscar') textbuscar!: ElementRef<HTMLInputElement>;
  Buscar() {
    const valor = this.textbuscar.nativeElement.value;
    this._Sgifs.SearchGifs(valor);
    this.textbuscar.nativeElement.value = '';
  }
}
