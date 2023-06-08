import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: 'list',
   component: PokemonListComponent
  },
  {path: '',
   redirectTo: 'list',
    pathMatch: 'full'
  },
  {path: ':name',
  component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
