import { Component } from '@angular/core';

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'ns-main',
  moduleId: module.id,
  templateUrl: './main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {

  constructor(private pokemonService: PokemonService) {
    var pokemon = this.pokemonService.getPokemon();
    
  }
}