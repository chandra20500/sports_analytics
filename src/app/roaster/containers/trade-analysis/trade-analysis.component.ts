import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-trade-analysis',
  templateUrl: './trade-analysis.component.html',
  styleUrls: ['./trade-analysis.component.scss'],
})
export class TradeAnalysisComponent implements OnInit, AfterViewInit {
  public doughnutChartLabels: Label[] = ['MLE/Room', 'Over Tax', 'Cap Room', 'Total Salary'];
  public doughnutChartData = [[35, 45, 10, 10]];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 80,
    tooltips: { enabled: false },
  };
  public doughnutChartColors = [
    {
      backgroundColor: ['#A11300', '#333333', '#39AB41', '#F89751'],
      hoverBorderColor: ['#A11300', '#333333', '#39AB41', '#F89751'],
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
        ctx.fillStyle = '#333333';

        // Draw text in center
        ctx.fillText('25.3%', centerX, centerY);
      },
    },
  ];

  public barChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          barPercentage: 0.3,
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

  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Actual' },
    { data: [75, 69, 87, 87, 66, 65, 70], label: 'Forecast', type: 'line' },
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myChart') myChart: ElementRef;
  context: CanvasRenderingContext2D;

  barChartColors = [
    {
      borderColor: '#376DC8',
      backgroundColor: '#376DC8',
    },
    {
      borderColor: '#74AAF8',
      fill: false,
    },
  ];

  elements = [
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'success',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'failure',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'success',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'failure',
    },
  ];
  data = new MatTableDataSource(this.elements);
  displayedColumns: string[] = [
    'player_trade_in',
    'player_trade_out',
    'team_involved',
    'contract',
    'payroll',
    'impact',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // const ctx = (this.myChart.nativeElement as HTMLCanvasElement).getContext('2d');
    const gradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, '#376DC8');
    gradient.addColorStop(1, '#A0ABFF67');
    this.barChartColors = [
      {
        borderColor: '#376DC8',
        backgroundColor: gradient,
      },
      {
        borderColor: '#74AAF8',
        fill: false,
      },
    ];
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
