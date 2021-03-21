import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [PokedexComponent, DetailsComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule,
    LazyLoadImagesModule
  ]
})
export class PokedexModule { }
