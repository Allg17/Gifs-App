import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { RESTCountryResponse } from '../Interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _ApiUrl: String = "https://restcountries.com/v2";
  constructor(private http: HttpClient) { }
  get parameters() {
    return new HttpParams().set('fields', "name,flags,population,capital,translations,alpha3Code,numericCode,alpha2Code")
  }


  BuscarPais(termino: String): Observable<RESTCountryResponse[]> {
    const url = `${this._ApiUrl}/name/${termino}`
    // return this.http.get(url).
    // pipe(
    //   catchError(error=>of([error]))
    // );

    return this.http.get<RESTCountryResponse[]>(url, { params: this.parameters });
  }

  BuscarPorCapital(termino: String): Observable<RESTCountryResponse[]> {
    const url = `${this._ApiUrl}/capital/${termino}`
    // return this.http.get(url).
    // pipe(
    //   catchError(error=>of([error]))
    // );

    return this.http.get<RESTCountryResponse[]>(url, { params: this.parameters });
  }

  BuscarPaisPorCodigo(termino: String): Observable<RESTCountryResponse> {
    const url = `${this._ApiUrl}/alpha/${termino}`
    // return this.http.get(url).
    // pipe(
    //   catchError(error=>of([error]))
    // );

    return this.http.get<RESTCountryResponse>(url, { params: this.parameters });
  }
  BuscarPaisPorRegion(termino: String): Observable<RESTCountryResponse[]> {
    const url = `${this._ApiUrl}/region/${termino}`
    // return this.http.get(url).
    // pipe(
    //   catchError(error=>of([error]))
    // );

    return this.http.get<RESTCountryResponse[]>(url, { params: this.parameters });
  }

}
