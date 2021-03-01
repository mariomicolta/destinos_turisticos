import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { AguadulceComponent } from './aguadulce/aguadulce.component';
import { AguasaladaComponent } from './aguasalada/aguasalada.component';


@NgModule({
  declarations: [AguadulceComponent, AguasaladaComponent],
  imports: [
    CommonModule,
    DestinosRoutingModule
  ]
})
export class DestinosModule { }
