export class Producto {
    $id: string;
    descripcion: string;
    tipo: string;
    fechaDeVencimiento: Date;
    precio: number;
    rutaFoto: string;


constructor(descripcion:string,tipo:string,fechaDeVencimiento:Date,precio:number) {
    this.descripcion  =  descripcion;
    this.tipo  =  tipo;
    this.fechaDeVencimiento =  fechaDeVencimiento;
    this.precio = precio;
    this.rutaFoto =  "http://placekitten.com/100/50";
}
  

  }
