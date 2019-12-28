import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule }   from '@angular/forms';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ContadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    ContadorComponent,
    GraficoDonaComponent
  ]
})
export class ComponentsModule { }
