import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ProductoService} from './services/producto.service';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ButtonDeleteProductoComponent } from './button-delete-producto/button-delete-producto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchProductoComponent } from './search-producto/search-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';
import { FormProductoAddComponent } from './form-producto-add/form-producto-add.component';
import { FormVentaAddComponent } from './form-venta-add/form-venta-add.component';
import { VentasListComponent } from './ventas-list/ventas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    ButtonDeleteProductoComponent,
    NavbarComponent,
    SearchProductoComponent,
    ViewProductoComponent,
    FormProductoAddComponent,
    FormVentaAddComponent,
    VentasListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
