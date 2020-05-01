import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductoService } from '../services/producto.service';

import { Producto } from '../producto';

@Component({
  selector: 'app-form-producto-add',
  templateUrl: './form-producto-add.component.html',
  styleUrls: ['./form-producto-add.component.css']
})
export class FormProductoAddComponent implements OnInit {

  public productoForm : FormGroup;

  constructor(private productoService: ProductoService) { 

    this.productoForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      fechaDeVencimiento: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required)
    });


  }

  ngOnInit() {
  }

  public newProducto() {
    if (this.productoForm.valid) {
    const productoNew = new Producto(
      this.productoForm.value.descripcion,
      this.productoForm.value.tipo,
      this.productoForm.value.fechaDeVencimiento,
      this.productoForm.value.precio
    );
    this.productoService.createProducto(productoNew);
    
    alert('Nuevo producto agregado');
    }
  }

  
}
