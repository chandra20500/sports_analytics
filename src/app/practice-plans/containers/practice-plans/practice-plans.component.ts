import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-practice-plans',
  templateUrl: './practice-plans.component.html',
  styleUrls: ['./practice-plans.component.scss'],
})
export class PracticePlansComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Skill Training', 'Stamina Building', 'Skill Training', 'High Intensity'];
  public doughnutChartData = [[35, 45, 10, 10]];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 80,
    tooltips: { enabled: false },
  };
  public doughnutChartColors = [
    {
      backgroundColor: ['#F85951', '#333333', '#39AB41', '#F89751'],
      hoverBorderColor: ['#F85951', '#333333', '#39AB41', '#F89751'],
      hoverBorderWidth: 2,
      showTooltips: false,
    },
  ];
  public doughnutChartLegend = false;
  public doughnutChartType: ChartType = 'doughnut';
  doughnutChartPlugins = [
    {
      beforeDraw(chart) {
        const ctx = chart.ctx;
        const txt = 'Center Text';

        // Get options from the center object in options
        const sidePadding = 60;
        const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        const stringWidth = ctx.measureText(txt).width;
        const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        const widthRatio = elementWidth / stringWidth;
        const newFontSize = Math.floor(30 * widthRatio);
        const elementHeight = chart.innerRadius * 2;

        // Pick a new font size so it will not be larger than the height of label.
        const fontSizeToUse = Math.min(newFontSize, elementHeight);

        ctx.font = 25 + 'px Montserrat';
        ctx.fillStyle = '#333333';

        // Draw text in center
        ctx.fillText('40%', centerX, centerY);
      },
    },
  ];

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Actual' },
    { data: [85, 69, 90, 91, 66, 65, 50], label: 'Forecast' },
  ];
  public lineChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
        },
      ],
    },
  };
  public lineChartColors = [
    {
      borderColor: '#EAEEFF',
      backgroundColor: '#EAEEFF',
    },
    {
      borderColor: '#376DC8',
      fill: false,
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() {}
  players = [1, 2, 3, 4];
  ngOnInit(): void {}

  chartHovered(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        console.log('serie from your dataset = ' + activePoints[0]._model.datasetLabel);
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
