import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  public ventas = [];

  constructor(private productoService: ProductoService) { 
  }


  ngOnInit() {
    this.productoService.getVentas().subscribe((catsSnapshot) => {
      this.ventas = [];
      catsSnapshot.forEach((ventaData: any) => {
        this.ventas.push({
          id: ventaData.payload.doc.id,
          data: ventaData.payload.doc.data()
        });
      })
    });
  }
}
