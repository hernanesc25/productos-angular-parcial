import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-search-producto',
  templateUrl: './search-producto.component.html',
  styleUrls: ['./search-producto.component.css']
})
export class SearchProductoComponent implements OnInit {
  @Output() productosEncontrados = new EventEmitter();
  public productos = [];
  public productosFiltrados = [];

  public searching = [];

  constructor(private productoService: ProductoService) { }

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


  public showSearchResults(event: any) {
    this.productosFiltrados = [];
    this.productos.forEach((productoData: any) => {
      if(productoData.data.descripcion.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1 ){
      
          this.productosFiltrados.push({
            data: productoData.data
          });
          this.productosEncontrados.emit({searching : this.productosFiltrados});
      }
    })

  }
}
