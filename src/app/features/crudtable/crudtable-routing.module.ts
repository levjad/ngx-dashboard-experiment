import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudtableComponent } from './crudtable.component';


const routes: Routes = [
  { path: '', component: CrudtableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudtableRoutingModule { }
