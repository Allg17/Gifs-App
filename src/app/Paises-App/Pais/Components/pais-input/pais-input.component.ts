import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { PaisService } from '../../Services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter
  @Input() placeholder: string = "Buscar Pais";
  debouncer: Subject<string> = new Subject();
  termino: string = '';
  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        this.OnDebounce.emit(valor)
      });
  }


  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
  Buscar() {
    this.OnEnter.emit(this.termino);
  }



}
