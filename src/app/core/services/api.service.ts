import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jokes } from '../../shared/models/jokes';
import { Todos } from '../../shared/models/todos';
import { Users } from '../../shared/models/users';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com';
  chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';

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
}
