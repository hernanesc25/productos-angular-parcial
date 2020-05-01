import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css'],

})
export class ViewProductoComponent implements OnInit {
  public productosFiltrados = [];

  constructor() { }

  ngOnInit() {
   
  }

  showProductos(event:any):void{
    this.productosFiltrados = [];
    this.productosFiltrados = event.searching;
  }

}
