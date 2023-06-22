import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concatMap, map } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent {

  public id$: Observable<string>;
  public pokemon$: Observable<any>;

  constructor(public activatedRoute: ActivatedRoute, public pokemonService: PokemonService, private location: Location, private router: Router){
    this.id$ = activatedRoute.params.pipe(map(p => p['id']));
    this.pokemon$ = this.id$.pipe(concatMap(i => this.pokemonService.getPokemon(i)))
    //pipe is for if you want to do some sort of manipulation w the later defined function w fat arrows
  }

  goBack() {
    this.backSound()
    this.location.back();
  }

  goToId(id: number){
    this.scrollSound()
    this.router.navigate(['/', id], 
    {skipLocationChange: true}
    );
  }

  scrollSound(){
    var scroll = new Audio('../assets/scroll.wav');
    scroll.play();
  }

  backSound(){
    var back = new Audio('../assets/prev.wav');
    back.play();
  }
}
