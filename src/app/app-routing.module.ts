import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', loadChildren : () => import('./modules/home/home.module').then(modulo => modulo.HomeModule)},
  {path : 'destinos', loadChildren : () => import('./modules/destinos/destinos.module').then(modulo => modulo.DestinosModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
