import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jokes } from '../../shared/models/jokes';
import { Todos } from '../../shared/models/todos';


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
