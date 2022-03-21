import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path:'home', component:HomePageComponent, canActivate:[AuthenticationGuard]},
  {path:'lazy', loadChildren: () =>
                import('./lazy-module/lazy-module.module').then((m) => m.LazyModuleModule)},
                
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
