import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jokes } from '../../shared/models/jokes';
import { Todos } from '../../shared/models/todos';
import { Users } from '../../shared/models/users';
import { PokemonDetails, PokemonList } from '../../shared/models/pokedex';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com';
  chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';
  pokedexApiBaseUrl = 'https://pokeapi.co/api/v2'

  constructor(private httpClient: HttpClient) { }

  public getTodos() {
    return this.httpClient.get<Todos[]>(`${this.jsonPlaceholderApi}/todos`);
  }

  public getUsers() {
    return this.httpClient.get<Users[]>(`${this.jsonPlaceholderApi}/users`);
  }

  public getChuckNorrisJokes() {
    return this.httpClient.get<Jokes>(this.chuckNorrisApiUrl);
  }

  public getPokemonList(url?: string) {
    if(url) {
      return this.httpClient.get<PokemonList>(`${url}`);
    } else {
      return this.httpClient.get<PokemonList>(`${this.pokedexApiBaseUrl}/pokemon`);
    }
  }

  public getPokemonDetails(url: string) {
    return this.httpClient.get<PokemonDetails>(`${url}`);
  }

}
