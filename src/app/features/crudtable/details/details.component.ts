import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'jad-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.detailsData = data;
  }

  ngOnInit() {
  }

}
