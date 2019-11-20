import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudtableRoutingModule } from './crudtable-routing.module';
import { CrudtableComponent } from './crudtable.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [CrudtableComponent, DetailsComponent],
  imports: [
    CommonModule,
    CrudtableRoutingModule,
    SharedModule
  ],
  entryComponents: [ DetailsComponent ]
})
export class CrudtableModule { }
