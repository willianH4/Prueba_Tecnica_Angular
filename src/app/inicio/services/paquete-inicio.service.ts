import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Paquete } from '../interfaces/paquete_inicio.interface';

@Injectable({
  providedIn: 'root'
})
export class PaqueteInicioService {

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  constructor(
    private http: HttpClient
  ) { }

  // https://api.tomtom.com/search/2/search/Amapulapa.json?countrySet=El%20Salvador&lat=37.337&lon=-121.89&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=A8KIOjtrKBA8eS21iW9Ojs8cxtM6kygI

  buscarLugar( termino: string ): Observable<any> {
    const url = `${ environment.urlBase }${ termino }.${environment.extension}?El Salvador&lat=37.337&lon=-121.89&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=${environment.apikey}`;
    return this.http.get<any>( url );
  }
}
