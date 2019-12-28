import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: SingleDataSet = [350, 450, 100];
  @Input() doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

}
