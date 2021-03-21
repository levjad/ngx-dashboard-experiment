import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { PokemonList, PokemonCard, PokemonDetails, PokemonListResult } from 'src/app/shared/models/pokedex';

@Component({
  selector: 'jad-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonList$: Observable<PokemonList>;
  pokemonList: PokemonCard[] = [];
  pokemonDetailList: PokemonDetails[] = [];
  selectedPokemon: PokemonDetails;
  totalCount: number;

  nextBatch: string;

  initLoading = true;
  moreLoading = false;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.apiService.getPokemonList().subscribe( response => {
      this.totalCount = response.count;
      this.nextBatch = response.next;
      this.addMorePokemon(response.results);

      this.initLoading = false;
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

  addMorePokemon(list: PokemonListResult[]) {
    list.forEach( item => {
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
      });
    });
  }

  loadMore() {
    this.moreLoading = true;
    this.apiService.getPokemonList(this.nextBatch).subscribe( response => {
      this.nextBatch = response.next;
      this.addMorePokemon(response.results)
      this.moreLoading = false;
    });
  }

  openDetailDrawer(drawer: MatDrawer, id: string) {
    this.selectedPokemon = this.pokemonDetailList.find(pokemon => pokemon.id === parseInt(id));
    drawer.toggle();
  }

}
