import { RouterModule } from '@angular/router';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';
import { FormProductoAddComponent } from './form-producto-add/form-producto-add.component';
import { FormVentaAddComponent } from './form-venta-add/form-venta-add.component';
import { VentasListComponent } from './ventas-list/ventas-list.component';

const appRoutes = [
    {path: 'productos', component: ProductosListComponent,},
    {path: 'productos/alta', component: FormProductoAddComponent},    
    {path: 'busqueda', component: ViewProductoComponent,},
    { 
        path: 'ventas',
        children: [
          { path: 'nueva', component: FormVentaAddComponent } ,
          { path: 'listado', component: VentasListComponent }                  
        ]     
      },
];
export const routing = RouterModule.forRoot(appRoutes);

