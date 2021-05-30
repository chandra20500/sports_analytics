import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: 'radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef;
  context: CanvasRenderingContext2D;

  @Input() radarChartData;
  @Input() radarChartLabels;
  @Input() radarChartOptions;
  @Input() radarChartColors;
  @Input() height;
  @Input() gradient;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const gradientAverage = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradientAverage.addColorStop(0, '#00FFFF');
    gradientAverage.addColorStop(0.7, '#00FFFF00');
    gradientAverage.addColorStop(1, '#30455D');
    const gradientPlayer = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradientPlayer.addColorStop(0, '#FDFDFD');
    gradientPlayer.addColorStop(0.3, 'rgba(96, 119, 143, 0.5');
    gradientPlayer.addColorStop(1, 'rgb(48, 69, 93, 0.5)');
    this.radarChartColors = [
      {
        backgroundColor: gradientPlayer,
        borderColor: 'rgba(0,0,0,0)',
      },
      {
        backgroundColor: gradientAverage,
        borderColor: 'rgba(0,0,0,0)',
      },
    ];
  }
}
