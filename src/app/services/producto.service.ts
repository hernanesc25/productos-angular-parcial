import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../producto';
import { Venta } from '../venta';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private firestore: AngularFirestore) { }
  
  getProductos() {
    return this.firestore.collection('productos').snapshotChanges();
  }
  getVentas() {
    return this.firestore.collection('ventas').snapshotChanges();
  }

  deleteProducto(id: string){
    this.firestore.doc('productos/' + id).delete();
  }

  createProducto(producto: Producto){
   this.firestore.collection('productos').add(JSON.parse(JSON.stringify(producto)));
  }

  createVenta(venta: Venta){
    this.firestore.collection('ventas').add(JSON.parse(JSON.stringify(venta)));
   }
 
}