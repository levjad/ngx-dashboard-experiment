import { Component, OnInit, Input } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'jad-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  single: any[];
  multi: any[];

  @Input() view: any[];
  @Input() mode: string;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514']
  };

  constructor() {
    Object.assign(this, { single });
   }

  ngOnInit() {}

  onSelect(event) {
    console.log(event);
  }

}
