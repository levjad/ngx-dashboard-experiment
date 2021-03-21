import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/shared/models/pokedex';

@Component({
  selector: 'jad-pokedex-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input()
  selectedPokemon: PokemonDetails;

  constructor() { }

  ngOnInit(): void {
    if(this.selectedPokemon) {
      console.log('### selected', this.selectedPokemon);
    }
    
  }

  createUrl(id: number) {
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.paddedId(id)}.png`;
    return url;
  }

  paddedId(id: number) {
    return id.toString().padStart(3, '0');
  }
  
  convertDmToM(height: number) {
    return parseFloat((height / 10).toString());
  }

  convertHgToKg(weight: number) {
    return parseFloat((weight / 10).toString());
  }
}
