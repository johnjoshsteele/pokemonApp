import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Pokemon } from './models/pokemon';
import { HttpClient } from '@angular/common/http'
import { ListAPIResponse } from './models/list-api-response';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private url = "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient) {}

  public listPokemon(pageOffset = 0, limit = 12) {
    const params = {
      limit : limit,
      offset : pageOffset
    };
    return this.http
      .get<ListAPIResponse>(`${this.url}pokemon`, {params: params})
      .pipe(map(res => res.results))
  }

  public getPokemon(name: string) {
    name = name.toLowerCase()
    return this.http.get<any>(`${this.url}pokemon/${name}`)
  }

  public getCount(){
    return this.http.get<any>(`${this.url}pokemon`).pipe(map(res => res.count))
  }

}
