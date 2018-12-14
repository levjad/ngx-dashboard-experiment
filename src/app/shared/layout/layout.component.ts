import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jad-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  links: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.links = [
      { url: '/', icon: 'dashboard', title: 'Dashboard'}
    ];
  }
}

