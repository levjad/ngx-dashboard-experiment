import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
