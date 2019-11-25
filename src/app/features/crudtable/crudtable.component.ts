import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'jad-crudtable',
  templateUrl: './crudtable.component.html',
  styleUrls: ['./crudtable.component.scss']
})
export class CrudtableComponent implements OnInit {
  data: Array<any>;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = [ 'id', 'name', 'username', 'website', 'actions' ];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe( result => {
      this.data = result;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
  }

  openDetails(data: any): void {
    this.dialog.open(DetailsComponent, {
      width: '500px',
      data: data
    });
  }

  openFormDialog(data?: any) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result && result.mode === 'create') {
        result.value.id = this.data.length + 1;
        this.data.push(result.value);
        this.dataSource = new MatTableDataSource<any>(this.data);
      }

      if ( result && result.mode === 'edit') {
        const index = this.data.findIndex(e => e.id === result.value.id );
        this.data[index] = result.value;
        this.dataSource = new MatTableDataSource<any>(this.data);
      }
    });
  }

  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '256px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for ( let i = 0; i < this.data.length; i++) {
          if (this.data[i].id === id) {
            this.data.splice(i, 1);
          }
        }
        this.dataSource = new MatTableDataSource<any>(this.data);
      }
    });
  }

}
