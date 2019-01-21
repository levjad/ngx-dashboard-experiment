import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, takeUntil } from 'rxjs/operators';

import { ApiService } from '../../shared/services/api.service';
import { Todos } from '../../shared/models/todos';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'jad-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  todos$: Observable<Todos[]>;
  displayedColumns: string[] = ['id', 'title', 'status'];

  /** Based on the screen size, switch from standard to one column per row */
  headlines = this.breakpointObserver.observe(Breakpoints.Handset).pipe (
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Headline 1', subtitle: 'Subtitle', color: 'deeppink', cols: 4, rows: 1 },
          { id: 2, title: 'Headline 2', subtitle: 'Subtitle', color: 'deepskyblue', cols: 4, rows: 1 },
          { id: 3, title: 'Headline 3', subtitle: 'Subtitle', color: 'lawngreen', cols: 4, rows: 1 },
          { id: 4, title: 'Headline 4', subtitle: 'Subtitle', color: 'orangered', cols: 4, rows: 1 }
        ];
      }

      return [
        { id: 1, title: 'Headline 1', subtitle: 'Subtitle', color: 'deeppink', cols: 1, rows: 1 },
        { id: 2, title: 'Headline 2', subtitle: 'Subtitle', color: 'deepskyblue', cols: 1, rows: 1 },
        { id: 3, title: 'Headline 3', subtitle: 'Subtitle', color: 'lawngreen', cols: 1, rows: 1 },
        { id: 4, title: 'Headline 4', subtitle: 'Subtitle', color: 'orangered', cols: 1, rows: 1 }
      ];
    })
  );

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Card 1', cols: 4, rows: 1 },
          { id: 2, title: 'Card 2', cols: 4, rows: 1 },
          { id: 3, title: 'Todo List', cols: 4, rows: 2 },
          { id: 4, title: 'Card 4', cols: 4, rows: 1 }
        ];
      }

      return [
        { id: 1, title: 'Card 1', cols: 4, rows: 1 },
        { id: 2, title: 'Card 2', cols: 2, rows: 1 },
        { id: 3, title: 'Todo List', cols: 2, rows: 2 },
        { id: 4, title: 'Card 4', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {}

  getTodos() {
    this.todos$ = this.apiService.getTodos();
  }



}
