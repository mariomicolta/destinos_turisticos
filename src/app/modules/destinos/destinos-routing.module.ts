import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguadulceComponent } from './aguadulce/aguadulce.component';
import { AguasaladaComponent } from './aguasalada/aguasalada.component';

const routes: Routes = [
  {path : 'aguadulce', component : AguadulceComponent},
  {path : 'aguasalada', component : AguasaladaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
