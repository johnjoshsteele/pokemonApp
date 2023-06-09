import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})

export class PokemonHomeComponent implements OnInit{

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ){}

  ngOnInit(): void {
    this.whoSound()
  }

  start(){
    this.loadUpSound()
    this.menuSound()
    this.router.navigate(['list'])
  }

  menuSound(){
    var menu = new Audio('../assets/bleachTitleTheme.mp3');
    menu.play();
    menu.loop = true;
  }

  loadUpSound(){
    var loadUp = new Audio('../assets/pokeLevelUp.mp3');
    loadUp.play();
  }

  whoSound(){
    var who = new Audio('../assets/whosThatPokemon.mp3');
    who.play()
  }

}
