import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { LazyComponent } from './components/lazy/lazy.component';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyModuleRoutingModule
  ],
  exports: [
    LazyComponent,
    CommonModule,
    LazyModuleRoutingModule
  ]
})
export class LazyModuleModule { }
