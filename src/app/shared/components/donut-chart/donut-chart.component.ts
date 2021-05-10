import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: 'donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements OnInit {
  @Input() doughnutChartData;
  @Input() doughnutChartLabels;
  @Input() doughnutChartColors;
  @Input() doughnutChartOptions;
  @Input() doughnutChartLegend;
  @Input() doughnutChartPlugins;
  @Input() height;
  constructor() {}

  ngOnInit(): void {}

  chartHovered(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // console.log('Dataset = ' + activePoints[0]._model.datasetLabel);
        this.doughnutChartPlugins = [
          {
            beforeDraw(chart1) {
              const ctx = chart1.ctx;
              const txt = 'Center Text';
              // Get options from the center object in options
              const sidePadding = 60;
              const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              const centerX = (chart1.chartArea.left + chart.chartArea.right) / 2;
              const centerY = (chart1.chartArea.top + chart.chartArea.bottom) / 2;

              // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
              const stringWidth = ctx.measureText(txt).width;
              const elementWidth = chart1.innerRadius * 2 - sidePaddingCalculated;

              // Find out how much the font can grow in width.
              const widthRatio = elementWidth / stringWidth;
              const newFontSize = Math.floor(30 * widthRatio);
              const elementHeight = chart1.innerRadius * 2;

              // Pick a new font size so it will not be larger than the height of label.
              const fontSizeToUse = Math.min(newFontSize, elementHeight);

              ctx.font = 12 + 'px Montserrat';
              ctx.fillStyle = '#333333';

              // Draw text in center
              ctx.fillText(label, centerX, centerY);
            },
          },
        ];
      }
    }
  }
}
