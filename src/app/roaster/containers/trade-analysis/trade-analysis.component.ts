import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-trade-analysis',
  templateUrl: './trade-analysis.component.html',
  styleUrls: ['./trade-analysis.component.scss'],
})
export class TradeAnalysisComponent implements OnInit {
  doughnutChartLabels: Label[] = ['MLE/Room', 'Over Tax', 'Cap Room', 'Total Salary'];
  doughnutChartData = [[35, 45, 10, 10]];
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 80,
    tooltips: {
      enabled: true,
      backgroundColor: '#FFF',
      titleFontSize: 16,
      titleFontColor: '#0066ff',
      bodyFontColor: '#000',
      bodyFontSize: 14,
      displayColors: true,
    },
  };
  doughnutChartColors = [
    {
      backgroundColor: ['#A11300', '#333333', '#39AB41', '#F89751'],
      hoverBorderColor: ['#A11300', '#333333', '#39AB41', '#F89751'],
      hoverBorderWidth: 2,
    },
  ];
  doughnutChartLegend = false;
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
        ctx.fillText('25.3%', centerX, centerY);
      },
    },
  ];

  barChartOptions = {
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
  barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  barChartLegend = false;
  barChartPlugins = [];
  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Actual' },
    { data: [75, 69, 87, 87, 66, 65, 70], label: 'Forecast', type: 'line' },
  ];
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
  barGradient = { gradient: true, startColor: '#376DC8', endColor: '#A0ABFF67' };

  tradeRecords = [
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: ['team1.png', 'team2.png'],
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'success',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: ['team3.png', 'team2.png'],
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'failure',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: ['team1.png', 'team3.png'],
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'success',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: ['team2.png', 'team3.png'],
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'failure',
    },
  ];
  tradeData = new MatTableDataSource(this.tradeRecords);
  displayedColumns: string[] = [
    'player_trade_in',
    'player_trade_out',
    'team_involved',
    'contract',
    'payroll',
    'impact',
  ];
  highestTrades = [
    {
      playerA: {
        name: 'Nkosi Burgess',
        role: 'Defender',
        contract: 'ABC',
        logo: 'team1.png',
      },
      playerB: {
        name: 'Nkosi Burgess',
        role: 'Defender',
        contract: 'XYZ',
        logo: 'team2.png',
      },
      signValue: '$1,120,500',
    },
    {
      playerA: {
        name: 'Nkosi Burgess',
        role: 'Defender',
        contract: 'ABC',
        logo: 'team2.png',
      },
      playerB: {
        name: 'Nkosi Burgess',
        role: 'Defender',
        contract: 'XYZ',
        logo: 'team3.png',
      },
      signValue: '$1,120,300',
    },
    {
      playerA: {
        name: 'Nkosi Burgess',
        role: 'Defender',
        contract: 'ABC',
        logo: 'team3.png',
      },
      playerB: {
        name: 'Nkosi Burgess',
        role: 'Defender',
        contract: 'XYZ',
        logo: 'team2.png',
      },
      signValue: '$1,120,000',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
