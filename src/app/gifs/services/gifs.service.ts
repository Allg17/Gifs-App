import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'jKCcEY0snnrVvnI5MB2kysvdSW2O6lLd';
  private url: string = 'https://api.giphy.com/v1/gifs/search';
  private _History: string[] = [];
  public Data: Gif[] = [];
  get History() {
    return [...this._History];
  }

  /**
   *
   */
  constructor(private http: HttpClient) {
    this._History = JSON.parse(localStorage.getItem('search')!) || []
    this.Data = JSON.parse(localStorage.getItem(this._History[0])!) || []
  }
  // async SearchGifs(query: string) {
  //   let valor: string = query.trim().toUpperCase();
  //   if (query.length > 0) {
  //     if (!this._History.includes(valor)) {
  //       this._History.unshift(valor);
  //       console.log(this._History);
  //     }
  //   }

  //   //  const resp=await fetch('https://api.giphy.com/v1/gifs/search?api_key=jKCcEY0snnrVvnI5MB2kysvdSW2O6lLd&q=spiderman&limit=10')
  //   //   .then(resp=>{
  //   //     resp.json().then(data=>console.log(data));
  //   //   });
  //   const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=jKCcEY0snnrVvnI5MB2kysvdSW2O6lLd&q=spiderman&limit=10');
  //   const data = await resp.json();
  //   console.log(data);
  // }

  SearchGifs(query: string) {
    let valor: string = query.trim().toUpperCase();
    if (query.length > 0) {
      if (!this._History.includes(valor)) {
        this._History.unshift(valor);
        console.log(this._History);
        localStorage.setItem('search', JSON.stringify(this._History));
        
      }
    }

    this.http.get<SearchGifsResponse>(`${this.url}?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe(resp => {
        console.log(resp.data);
        this.Data = resp.data;
        localStorage.setItem(valor, JSON.stringify(this.Data));
      });

  }
}
