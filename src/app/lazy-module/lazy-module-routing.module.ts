import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './components/lazy/lazy.component';

const routes: Routes = [
  {path:'', redirectTo:'lazyChild',pathMatch:'full'},
  {path:'lazyChild', component:LazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }
