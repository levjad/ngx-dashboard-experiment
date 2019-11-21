import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudtableRoutingModule } from './crudtable-routing.module';
import { CrudtableComponent } from './crudtable.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [CrudtableComponent, DetailsComponent, FormComponent],
  imports: [
    CommonModule,
    CrudtableRoutingModule,
    SharedModule
  ],
  entryComponents: [ DetailsComponent, FormComponent ]
})
export class CrudtableModule { }
