import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { IniclienteComponent } from './component/inicliente/inicliente.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada redirigida a Home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicliente', component: IniclienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
