import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: 'bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef;
  context: CanvasRenderingContext2D;

  @Input() barChartData;
  @Input() barChartLabels;
  @Input() barChartOptions;
  @Input() barChartColors;
  @Input() barChartLegend;
  @Input() barChartPlugins;
  @Input() gradient;
  @Input() height;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.gradient.gradient) {
      const gradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0, this.gradient.startColor);
      gradient.addColorStop(0.3, this.gradient.endColor);
      this.barChartColors[0] = {
        borderColor: gradient,
        backgroundColor: gradient,
      };
    }
  }
}
