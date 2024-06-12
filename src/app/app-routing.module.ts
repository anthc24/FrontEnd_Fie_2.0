import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { IniclienteComponent } from './component/inicliente/inicliente.component';
import { ViscreditoComponent } from './component/viscredito/viscredito.component';
import { Viscredito1Component } from './component/viscredito1/viscredito1.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada redirigida a Home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicliente', component: IniclienteComponent },
  { path: 'viscredito', component: ViscreditoComponent },
  { path: 'viscredito1', component: Viscredito1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
