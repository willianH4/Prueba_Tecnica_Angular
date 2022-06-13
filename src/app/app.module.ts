import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PaquetesModule } from './paquetes/paquetes.module';
import { NosotrosModule } from './nosotros/nosotros.module';
import { InicioModule } from './inicio/inicio.module';
import { AppRoutingModule } from './app.routin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    PaquetesModule,
    NosotrosModule,
    InicioModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
