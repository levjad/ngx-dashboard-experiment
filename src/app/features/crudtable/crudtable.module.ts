import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudtableRoutingModule } from './crudtable-routing.module';
import { CrudtableComponent } from './crudtable.component';


@NgModule({
  declarations: [CrudtableComponent],
  imports: [
    CommonModule,
    CrudtableRoutingModule,
    SharedModule
  ]
})
export class CrudtableModule { }
