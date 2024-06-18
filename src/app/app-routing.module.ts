import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { IniclienteComponent } from './component/inicliente/inicliente.component';
import { ViscreditoComponent } from './component/viscredito/viscredito.component';
import { Viscredito1Component } from './component/viscredito1/viscredito1.component';
import { Viscredito2Component } from './component/viscredito2/viscredito2.component';
import { Agregarconsumo1Component } from './component/agregarconsumo1/agregarconsumo1.component';
import { Agregarconsumo2Component } from './component/agregarconsumo2/agregarconsumo2.component';
import { NuevocliienteComponent } from './component/nuevocliiente/nuevocliiente.component';
import { DocumentacionesComponent } from './component/documentaciones/documentaciones.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada redirigida a Home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicliente', component: IniclienteComponent },
  { path: 'viscredito', component: ViscreditoComponent },
  { path: 'viscredito1', component: Viscredito1Component },
  { path: 'viscredito2', component: Viscredito2Component },
  { path: 'agregarconsumo1', component: Agregarconsumo1Component },
  { path: 'agregarconsumo2', component: Agregarconsumo2Component },
  { path: 'nuevocliente', component: NuevocliienteComponent },
  { path: 'documentaciones', component: DocumentacionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
