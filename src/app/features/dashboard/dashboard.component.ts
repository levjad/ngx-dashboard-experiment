import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { ApiService } from '../../shared/services/api.service';
import { Todos } from '../../shared/models/todos';
import { Jokes } from '../../shared/models/jokes';
import { Observable } from 'rxjs';

@Component({
  selector: 'jad-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  todos$: Observable<Todos[]>;
  jokes$: Observable<Jokes[]>;
  displayedColumns: string[] = ['id', 'title', 'status'];

  today;

  /** Based on the screen size, switch from standard to one column per row */
  headlines = this.breakpointObserver.observe(Breakpoints.Handset).pipe (
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, subtitle: 'Time', color: 'deeppink', cols: 4, rows: 1 },
          { id: 2, subtitle: 'Date', color: 'deepskyblue', cols: 4, rows: 1 },
          { id: 3, subtitle: 'Week of year', color: 'lawngreen', cols: 4, rows: 1 },
          { id: 4, subtitle: 'Year', color: 'orangered', cols: 4, rows: 1 }
        ];
      }

      return [
        { id: 1, subtitle: 'Time', color: 'deeppink', cols: 1, rows: 1 },
        { id: 2, subtitle: 'Date', color: 'deepskyblue', cols: 1, rows: 1 },
        { id: 3, subtitle: 'Week of year', color: 'lawngreen', cols: 1, rows: 1 },
        { id: 4, subtitle: 'Year', color: 'orangered', cols: 1, rows: 1 }
      ];
    })
  );

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Joke of the Day', cols: 4, rows: 1 },
          { id: 2, title: 'Pie Grid', cols: 4, rows: 1 },
          { id: 3, title: 'Todo List', cols: 4, rows: 2 },
          { id: 4, title: 'Bar Vertical', cols: 4, rows: 1 }
        ];
      }

      return [
        { id: 1, title: 'Joke of the Day', cols: 4, rows: 1 },
        { id: 2, title: 'Pie Grid', cols: 2, rows: 1 },
        { id: 3, title: 'Todo List', cols: 2, rows: 2 },
        { id: 4, title: 'Bar Vertical', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService) {
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    this.getTodos();
    this.getJokes();
  }

  ngOnDestroy(): void {}

  getTodos() {
    this.todos$ = this.apiService.getTodos();
  }

  getJokes() {
    this.jokes$ = this.apiService.getChuckNorrisJokes();
  }

}
