import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LoginIndexComponent } from './component/login/login-index/login-index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports Angular
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './component/home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { IniclienteComponent } from './component/inicliente/inicliente.component';
import { ViscreditoComponent } from './component/viscredito/viscredito.component';
import { Viscredito1Component } from './component/viscredito1/viscredito1.component';
import { Viscredito2Component } from './component/viscredito2/viscredito2.component';
import { Agregarconsumo1Component } from './component/agregarconsumo1/agregarconsumo1.component';
import { Agregarconsumo2Component } from './component/agregarconsumo2/agregarconsumo2.component';
import { NuevocliienteComponent } from './component/nuevocliiente/nuevocliiente.component';
import { DocumentacionesComponent } from './component/documentaciones/documentaciones.component';
import { MisclientesComponent } from './component/misclientes/misclientes.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { MisfinanzasComponent } from './component/misfinanzas/misfinanzas.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginIndexComponent,
    HomeComponent,
    IniclienteComponent,
    ViscreditoComponent,
    Viscredito1Component,
    Viscredito2Component,
    Agregarconsumo1Component,
    Agregarconsumo2Component,
    NuevocliienteComponent,
    DocumentacionesComponent,
    MisclientesComponent,
    InventarioComponent,
    MisfinanzasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
