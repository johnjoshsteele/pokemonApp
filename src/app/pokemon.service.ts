import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http'
import { ListAPIResponse } from './models/list-api-response';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private url = "https://localhost:7231/api/"

  constructor(private http: HttpClient) {}

  public listPokemon(pageOffset = 0, limit = 12) {
    return this.http
      .get<any>(`${this.url}Pokemon`)
      .pipe(map(res => res))
  }
  

  public getPokemon(id: string) {
    return this.http.get<any>(`${this.url}Pokemon?id=${id}`)
  }

  public getCount(){
    return this.http.get<any>(`${this.url}Pokemon`).pipe(map(res => res.count))
  }

}
