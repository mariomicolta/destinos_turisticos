import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { ListComponent } from './list/list.component';
import { AguadulceComponent } from './aguadulce/aguadulce.component';
import { AguasaladaComponent } from './aguasalada/aguasalada.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [ListComponent, AguadulceComponent, AguasaladaComponent, CardComponent],
  imports: [
    CommonModule,
    DestinosRoutingModule
  ]
})
export class DestinosModule { }
