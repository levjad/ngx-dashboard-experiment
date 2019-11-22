import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudtableRoutingModule } from './crudtable-routing.module';
import { CrudtableComponent } from './crudtable.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [CrudtableComponent, DetailsComponent, FormComponent, DeleteComponent],
  imports: [
    CommonModule,
    CrudtableRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  entryComponents: [ DetailsComponent, FormComponent, DeleteComponent ]
})
export class CrudtableModule { }
