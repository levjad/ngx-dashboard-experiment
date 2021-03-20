import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { PokemonList, PokemonCard, PokemonDetails } from 'src/app/shared/models/pokedex';

@Component({
  selector: 'jad-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonList$: Observable<PokemonList>;
  pokemonList: PokemonCard[] = [];
  pokemonDetailList: PokemonDetails[] = [];

  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.apiService.getPokemonList().subscribe( response => {
      const results = response.results;
      results.forEach( item => {
        const id = this.createId(item.url);
        const types = [];
        
        this.apiService.getPokemonDetails(item.url).subscribe( response => {
          this.pokemonDetailList.push(response);

          response.types.forEach( type => {
            types.push(type.type.name);
          })
        });

        this.pokemonList.push({
          id: id,
          name: this.capitalizeName(item.name),
          image: this.createImageUrl(id),
          types: types
        })
      });

      this.loading = false;
      console.log('###', this.pokemonDetailList);
    });
  }

  createId(url: string): string {
    const urlSliced = url.slice(0, -1);
    return urlSliced.substring(urlSliced.lastIndexOf('/') + 1).padStart(3, '0');
  }

  capitalizeName(name: string) {
    return name.replace(/^\w/, c => c.toUpperCase())
  }

  createImageUrl(id: string) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
  }

}