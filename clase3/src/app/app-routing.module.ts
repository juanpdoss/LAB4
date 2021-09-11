import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbProductosComponent } from './page/amb-productos/amb-productos.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';

//ng generate module customers --route customers --module app.module


const routes: Routes = [
  // { path: 'pricing', component: AmbProductosComponent },
  // { path: 'ingreso/login', component: LoginComponent },
  // { path: 'ingreso/registro', component: RegistroComponent },
  // { path: '**', component: AmbProductosComponent },
  { path: 'pricing', component: AmbProductosComponent },
  // { ESTO ESTA M A L , poco optimo cargar TODO
  //   // //ruteo hijos definidos en el array children
  //   // path: 'ingreso',
  //   // // children: [
  //   // //   { path: 'login', component: LoginComponent },
  //   // //   { path: 'registro', component: RegistroComponent },
  //   // //   { path: '**', component: LoginComponent },
  //   // // ],
  // },
  {
    path: 'ingreso',
    loadChildren: () =>
      import('./ingreso/ingreso.module').then((m) => m.IngresoModule),
  },
  { path: '**', component: AmbProductosComponent },
];
//agrupamiento de rutas, routeo padres y routeos hijos

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
