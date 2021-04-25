import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-trade-overview',
  templateUrl: './trade-overview.component.html',
  styleUrls: ['./trade-overview.component.scss'],
})
export class TradeOverviewComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['spend', 'remaining'];
  public doughnutChartData = [[35, 45]];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 80,
    tooltips: { enabled: false },
  };
  public doughnutChartColors = [
    {
      backgroundColor: ['#A11300', '#C0CDF2'],
      hoverBorderColor: ['#A11300', '#C0CDF2'],
      hoverBorderWidth: 2,
    },
  ];

  public doughnutChartLegend = false;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartPlugins = [
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
        ctx.fillStyle = '#A11300';

        // Draw text in center
        ctx.fillText('57%', centerX, centerY);
      },
    },
  ];

  public barChartColors = [
    {
      borderColor: '#376DC8',
      backgroundColor: '#376DC8',
    },
    {
      borderColor: '#C3ECB9',
      backgroundColor: '#C3ECB9',
    },
  ];

  public barChartOptions = {
    responsive: true,
    legend: { position: 'top' },
    borderRadius: '50px',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          barPercentage: 0.3,
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
          ticks: {
            max: 100,
            stepSize: 20,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  public barChartLabels: Label[] = ['Defence', 'Offense', 'MidField', 'Others'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData = [
    { data: [55, 45, 77, 80], label: 'Team Avg', stack: 'a' },
    { data: [35, 29, 17, 17], label: 'After New Plaers', stack: 'a' },
  ];

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 22, 33, 44], label: 'Player 1' },
    { data: [28, 48, 40, 19, 86, 27, 30, 11, 44, 28], label: 'Player 2' },
    { data: [18, 40, 70, 50, 20, 37, 50, 22, 11, 33], label: 'Player 3' },
    { data: [12, 40, 70, 90, 10, 27, 40, 67, 76, 66], label: 'Team' },
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: true,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  public lineChartLabels: Label[] = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  public lineChartColors = [
    {
      borderColor: '#63B1EC',
      pointBackgroundColor: '#63B1EC',
      pointBorderColor: '#63B1EC',
      fill: false,
    },
    {
      borderColor: '#376DC8',
      pointBackgroundColor: '#376DC8',
      pointBorderColor: '#376DC8',
      fill: false,
    },
    {
      borderColor: '#3737C8',
      pointBackgroundColor: '#3737C8',
      pointBorderColor: '#3737C8',
      fill: false,
    },
    {
      borderColor: '#F98436',
      pointBackgroundColor: '#F98436',
      pointBorderColor: '#F98436',
      fill: false,
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  players = [1, 2, 3, 4];

  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
