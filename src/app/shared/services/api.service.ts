import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  todoApiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  public getTodos() {
    return this.httpClient.get<Todos[]>(this.todoApiUrl);
  }
}
