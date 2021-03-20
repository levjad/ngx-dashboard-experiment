import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'crud', loadChildren: () => import('./features/crudtable/crudtable.module').then(m => m.CrudtableModule) },
        { path: 'pokedex', loadChildren: () => import('./features/pokedex/pokedex.module').then(m => m.PokedexModule) }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
