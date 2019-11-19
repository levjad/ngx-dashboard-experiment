import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'jad-crudtable',
  templateUrl: './crudtable.component.html',
  styleUrls: ['./crudtable.component.scss']
})
export class CrudtableComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns = [ 'id', 'name', 'username', 'website' ];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe( result => {
      this.dataSource = new MatTableDataSource<any>(result);
    });
  }

}
