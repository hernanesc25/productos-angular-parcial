import { Producto } from './producto';

export class Venta extends Producto{
    fechaDeVenta: Date;
    cantidad: number;

constructor(descripcion:string,tipo:string,fechaDeVencimiento:Date,precio:number, cantidad:number) {
    super(descripcion,tipo,fechaDeVencimiento,precio);
    this.fechaDeVenta = new Date(Date.now());
    this.cantidad = cantidad;

  }

}