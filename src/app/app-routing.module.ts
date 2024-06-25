import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LoginIndexComponent } from './component/login/login-index/login-index.component';
import { IniclienteComponent } from './component/inicliente/inicliente.component';
import { ViscreditoComponent } from './component/viscredito/viscredito.component';
import { Viscredito1Component } from './component/viscredito1/viscredito1.component';
/*import { Viscredito2Component } from './component/viscredito2/viscredito2.component';*/
import { AgregarConsumo1Component } from './component/agregarconsumo1/agregarconsumo1.component';
import { Agregarconsumo2Component } from './component/agregarconsumo2/agregarconsumo2.component';
/*import { NuevocliienteComponent } from './component/nuevocliiente/nuevocliiente.component';*/
import { DocumentacionesComponent } from './component/documentaciones/documentaciones.component';
import { MisclientesComponent } from './component/misclientes/misclientes.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { MisfinanzasComponent } from './component/misfinanzas/misfinanzas.component';
import { CronogramamoraComponent } from './component/cronogramamora/cronogramamora.component';
import { CronogramapagoComponent } from './component/cronogramapago/cronogramapago.component';
import { SolicitudCreditoComponent } from './component/solicitudcredito/solicitudcredito.component';
import { VistaClienteinicioComponent } from './component/vista-clienteinicio/vista-clienteinicio.component'; // Importa el nuevo componente
import { TablaCronogramasComponent } from './component/tabla-cronogramas/tabla-cronogramas.component';
import { VerCreditosComponent } from './component/ver-creditos/ver-creditos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada redirigida a Home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tienda', component: IniclienteComponent },
  { path: 'viscredito', component: ViscreditoComponent },
  { path: 'viscredito1', component: Viscredito1Component },
  { path: 'login-index', component: LoginIndexComponent },
  /*{ path: 'viscredito2', component: Viscredito2Component },*/
  { path: 'agregarconsumo1', component: AgregarConsumo1Component },
  { path: 'agregarconsumo2', component: Agregarconsumo2Component },
  /*{ path: 'nuevocliente', component: NuevocliienteComponent },*/
  { path: 'documentaciones', component: DocumentacionesComponent },
  { path: 'misclientes', component: MisclientesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'misfinanzas', component: MisfinanzasComponent },
  { path: 'cronogramamora', component: CronogramamoraComponent },
  { path: 'cronogramapago', component: CronogramapagoComponent },
  { path: 'solicitudcredito', component: SolicitudCreditoComponent },
  { path: 'vista-clienteinicio', component: VistaClienteinicioComponent }, // Nueva ruta
  { path: 'tabla-cronogramas', component: TablaCronogramasComponent },
  {path:'ver-creditos', component:VerCreditosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
