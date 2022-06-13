import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaquetesPrecargadosComponent } from "./inicio/components/paquetes-precargados/paquetes-precargados.component";

const routes: Routes = [
  {
    path: '',
    component: PaquetesPrecargadosComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
