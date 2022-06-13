import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../interfaces/paquete_inicio.interface';
import { PaqueteInicioService } from '../../services/paquete-inicio.service';

@Component({
  selector: 'app-paquetes-precargados',
  templateUrl: './paquetes-precargados.component.html',
  styleUrls: ['./paquetes-precargados.component.css']
})
export class PaquetesPrecargadosComponent implements OnInit {

  images = [944, 1011, 984, 776, 870, 990, 679, 432, 179, 544].map((n) => `https://picsum.photos/id/${n}/900/500`);

  termino: string = "";
  errorConsulta: boolean = false;
  errorConsulta2: boolean = false;
  exito: boolean = false;
  paquetes: any;
  lugar: string = "";

  constructor(
    private paqueteService: PaqueteInicioService
  ) { }

  ngOnInit() {
    this.search("Juayua");
  }

  search( termino: string ) {
    this.errorConsulta = false;
    this.termino = termino;

    this.paqueteService.buscarLugar( termino )
    .subscribe( ( paquetes ) => {
      console.log( paquetes )
      this.paquetes = paquetes['results'];
    }, (error) => {
      this.errorConsulta = true;
      // console.log( "Error" );
      // console.info( error );
      this.paquetes = [];
    });

  }

  buscarLugar(termino: string) {
    this.lugar = termino;

    this.paqueteService.buscarLugar( this.lugar )
    .subscribe( ( paquetes ) => {
      console.log( paquetes )
      this.paquetes = paquetes['results'];
      this.exito = true;
      this.lugar = "";
    }, (error) => {
      this.errorConsulta2 = true;
      // console.log( "Error" );
      // console.info( error );
      this.paquetes = [];
    });
  }

}
