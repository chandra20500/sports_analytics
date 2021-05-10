import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: 'radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent implements OnInit {
  @Input() radarChartData;
  @Input() radarChartLabels;
  @Input() radarChartOptions;
  @Input() radarChartColors;
  @Input() radarChartLegend;
  @Input() height;

  constructor() {}

  ngOnInit(): void {}
}
