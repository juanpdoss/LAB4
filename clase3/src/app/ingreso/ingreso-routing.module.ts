import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { IngresoComponent } from './ingreso.component';
import { LoginComponent } from '../page/login/login.component';
import { RegistroComponent } from '../page/registro/registro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoRoutingModule {}
