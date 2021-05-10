import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef;
  context: CanvasRenderingContext2D;

  @Input() lineChartData;
  @Input() lineChartLabels;
  @Input() lineChartOptions;
  @Input() lineChartColors;
  @Input() lineChartLegend;
  @Input() lineChartPlugins;
  @Input() gradient;
  @Input() height;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.gradient.gradient) {
      const gradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0, this.gradient.startColor);
      gradient.addColorStop(0.1, this.gradient.endColor);
      this.lineChartColors[0] = {
        borderColor: gradient,
        backgroundColor: gradient,
      };
    }
  }
}
