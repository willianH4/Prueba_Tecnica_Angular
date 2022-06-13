import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OtrasTarjetasComponent } from './components/otras-tarjetas/otras-tarjetas.component';
import { PaquetesPrecargadosComponent } from './components/paquetes-precargados/paquetes-precargados.component';



@NgModule({
  declarations: [
    OtrasTarjetasComponent,
    PaquetesPrecargadosComponent
  ],
  exports: [
    OtrasTarjetasComponent,
    PaquetesPrecargadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class InicioModule { }
