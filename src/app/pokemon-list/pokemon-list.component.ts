import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable, concatMap, map, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent {
  public pokemon$: Observable<Pokemon[]>;
  public listSize : number = 12;
  public pageOffset : number = 0;
  public count!: number;

  constructor(
    public pokemonService: PokemonService,
    public route: ActivatedRoute,
    public router: Router
    ){
    route.queryParams.subscribe(p => console.log(p))

    this.pokemon$ = this.pokemonService.listPokemon(
      this.pageOffset,
      this.listSize
    )
    
    this.pokemon$ = route.queryParams
    .pipe(
      tap(qp => this.listSize = parseInt(qp['listSize']) || 12),
      concatMap(qp => this.pokemonService.listPokemon(qp['offset'], qp['listSize'])),
      map((pl) => pl.map((p) => new Pokemon(p.name!, p.url!)))
      )

      this.pokemonService.getCount().subscribe(count => {
        this.count = count
      })
  }

  setListSize(listSize: number){
    this.listSize = listSize;
    this.router.navigate([], {
      queryParams: { listSize },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  prevPage(){

    const offset = this.route.snapshot.queryParams['offset'] || 0;
    const size = this.route.snapshot.queryParams['size'] || 12;

    this.pageOffset = parseInt(offset) - parseInt(size);
    if (this.pageOffset < 0){
      return;
    }

    console.log(this.pageOffset);
    
    this.router.navigate([], {queryParams : {offset : this.pageOffset},
      queryParamsHandling: 'merge', relativeTo: this.route});
    }
    
    nextPage(){
      
      const offset = this.route.snapshot.queryParams['offset'] || 0;
      const size = this.route.snapshot.queryParams['size'] || 12;
      
      this.pageOffset = parseInt(offset) + parseInt(size);
      if (this.count < this.pageOffset){
        console.log(this.count)
        return;
      }
    this.router.navigate([], {queryParams : {offset : this.pageOffset},
      queryParamsHandling: 'merge', relativeTo: this.route});
      
  }

  searchPokemon(pokemonName: string){
    //Nav to the specified URL
    this.router.navigate(['', pokemonName.toLowerCase()]);
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

}
