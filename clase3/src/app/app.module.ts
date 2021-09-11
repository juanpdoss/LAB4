import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmbProductosComponent } from './page/amb-productos/amb-productos.component';
import { DetalleComponent } from './componente/detalle/detalle.component';
import { AltaProductoComponent } from './componente/alta-producto/alta-producto.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    AmbProductosComponent,
    DetalleComponent,
    AltaProductoComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
