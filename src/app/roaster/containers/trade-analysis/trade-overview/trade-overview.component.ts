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
  doughnutChartLabels: Label[] = ['spend', 'remaining'];
  doughnutChartData = [[35, 45]];
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
      backgroundColor: ['#A11300', '#C0CDF2'],
      hoverBorderColor: ['#A11300', '#C0CDF2'],
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
        ctx.fillStyle = '#A11300';

        // Draw text in center
        ctx.fillText('57%', centerX, centerY);
      },
    },
  ];

  barChartColors = [
    {
      borderColor: '#376DC8',
      backgroundColor: '#376DC8',
    },
    {
      borderColor: '#C3ECB9',
      backgroundColor: '#C3ECB9',
    },
  ];

  barChartOptions = {
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

  barChartLabels: Label[] = ['Defence', 'Offense', 'MidField', 'Others'];
  barChartLegend = true;
  barChartPlugins = [];
  barChartData = [
    { data: [55, 45, 77, 80], label: 'Team Avg', stack: 'a' },
    { data: [35, 29, 17, 17], label: 'After New Plaers', stack: 'a' },
  ];
  barGradient = { gradient: false };

  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 22, 33, 44], label: 'Player 1' },
    { data: [28, 48, 40, 19, 86, 27, 30, 11, 44, 28], label: 'Player 2' },
    { data: [18, 40, 70, 50, 20, 37, 50, 22, 11, 33], label: 'Player 3' },
    { data: [12, 40, 70, 90, 10, 27, 40, 67, 76, 66], label: 'Team' },
  ];
  lineChartOptions: ChartOptions = {
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

  lineChartLabels: Label[] = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  lineChartColors = [
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
  lineChartLegend = true;
  lineGradient = { gradient: false };
  lineChartPlugins = [];

  trade = {
    mainTeam: { name: 'Mavericks', logo: 'team1.png' },
    teamInvolved: [
      { name: 'Jazz', logo: 'team3.png' },
      { name: 'Nuggets', logo: 'team2.png' },
    ],
    conditions: [
      { key: 'Experience', value: '3 years' },
      { key: 'Position', value: 'G/F' },
      { key: 'Height', value: '6`8' },
      { key: 'Weight', value: '205 lbs' },
      { key: 'Birth Date', value: '10/06/2002' },
      { key: 'College', value: 'G League' },
    ],
  };
  trades = [
    { teamid: 'maverick', logo: 'team1.png', players: [{ name: 'Player Name', trade: 'out' }] },
    {
      teamid: 'nuggets',
      logo: 'team2.png',
      players: [
        { name: 'Player Name', trade: 'in' },
        { name: 'Player Name', trade: 'in' },
      ],
    },
    {
      teamid: 'dallas',
      logo: 'team3.png',
      players: [
        { name: 'Player Name', trade: 'in' },
        { name: 'Player Name', trade: 'in' },
      ],
    },
  ];
  players = [
    { name: 'Player 1', progress: 55, label: '$ 1,200,000' },
    { name: 'Player 2', progress: 35, label: '$ 500,000' },
    { name: 'Player 3', progress: 50, label: '$ 900,000' },
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
