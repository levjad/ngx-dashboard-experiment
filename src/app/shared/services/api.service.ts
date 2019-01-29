import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todos } from '../models/todos';
import { Jokes } from '../models/jokes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  todoApiUrl = 'https://jsonplaceholder.typicode.com/todos';
  chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) { }

  public getTodos() {
    return this.httpClient.get<Todos[]>(this.todoApiUrl);
  }

  public getChuckNorrisJokes() {
    return this.httpClient.get<Jokes[]>(this.chuckNorrisApiUrl);
  }
}
