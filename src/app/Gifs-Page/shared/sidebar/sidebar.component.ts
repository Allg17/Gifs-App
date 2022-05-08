import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get History(){
    return this.gifsService.History;
  }
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  Buscar(item: string)
  {
    console.log(item);
    
    this.gifsService.Data = JSON.parse(localStorage.getItem(item)!) ||[];
  }

}
