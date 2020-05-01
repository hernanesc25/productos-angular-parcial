import { Component, Input } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-button-delete-producto',
  templateUrl: './button-delete-producto.component.html',
  styleUrls: ['./button-delete-producto.component.css']
})
export class ButtonDeleteProductoComponent  {
  @Input() id: string;

  constructor(private productoService: ProductoService) {
  }
 
  delete() {
    this.productoService.deleteProducto(this.id);
  }


}
