import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],

})
export class ProductosListComponent implements OnInit {

  public productos = [];

  constructor(private productoService: ProductoService) { 
  }


  ngOnInit() {
    this.productoService.getProductos().subscribe((catsSnapshot) => {
      this.productos = [];
      catsSnapshot.forEach((productoData: any) => {
        this.productos.push({
          id: productoData.payload.doc.id,
          data: productoData.payload.doc.data()
        });
      })
    });
  }

}
