import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'jad-crudtable',
  templateUrl: './crudtable.component.html',
  styleUrls: ['./crudtable.component.scss']
})
export class CrudtableComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns = [ 'id', 'name', 'username', 'website', 'actions' ];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe( result => {
      this.dataSource = new MatTableDataSource<any>(result);
    });
  }

  openDetails(data: any): void {
    this.dialog.open(DetailsComponent, {
      width: '500px',
      data: data
    });
  }

  openFormDialog(data?: any) {
    this.dialog.open(FormComponent, {
      width: '50%',
      data: data
    });
  }

}
