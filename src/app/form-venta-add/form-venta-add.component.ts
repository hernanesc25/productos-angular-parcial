import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductoService } from '../services/producto.service';

import { Venta } from '../venta';

@Component({
  selector: 'app-form-venta-add',
  templateUrl: './form-venta-add.component.html',
  styleUrls: ['./form-venta-add.component.css']
})
export class FormVentaAddComponent implements OnInit {
  public productos = [];
  public ventaForm : FormGroup;
 
  constructor(private productoService: ProductoService) { 
    this.ventaForm = new FormGroup({
      producto: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required)
   });
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe((catsSnapshot) => {
     this.productos = [];
      catsSnapshot.forEach((productoData: any) => {
        this.productos.push(
         productoData.payload.doc.data()
        );
      })
    });
  }

  public newVenta() {
    const ventaNew = new Venta(
      this.productos[ this.ventaForm.value.producto].descripcion,
      this.productos[ this.ventaForm.value.producto].tipo,
      this.productos[this.ventaForm.value.producto].fechaDeVencimiento,
      this.productos[this.ventaForm.value.producto].precio,
      this.ventaForm.value.cantidad) 
    this.productoService.createVenta(ventaNew);
    alert('Venta registrada');

  }
}
