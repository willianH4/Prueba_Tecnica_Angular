import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComprarPaqueteComponent } from './components/comprar-paquete/comprar-paquete.component';



@NgModule({
  declarations: [
    ComprarPaqueteComponent
],
exports: [
  ComprarPaqueteComponent
],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaquetesModule { }
