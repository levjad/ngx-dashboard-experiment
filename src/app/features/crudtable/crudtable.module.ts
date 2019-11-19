import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudtableRoutingModule } from './crudtable-routing.module';
import { CrudtableComponent } from './crudtable.component';


@NgModule({
  declarations: [CrudtableComponent],
  imports: [
    CommonModule,
    CrudtableRoutingModule
  ]
})
export class CrudtableModule { }
