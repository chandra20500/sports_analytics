import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-practice-plans',
  templateUrl: './practice-plans.component.html',
  styleUrls: ['./practice-plans.component.scss'],
})
export class PracticePlansComponent implements OnInit {
  doughnutChartLabels: Label[] = ['Skill Training', 'Stamina Building', 'Skill Training', 'High Intensity'];
  doughnutChartData = [[35, 45, 10, 10]];
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
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
      backgroundColor: ['#F85951', '#333333', '#39AB41', '#F89751'],
      hoverBorderColor: ['#F85951', '#333333', '#39AB41', '#F89751'],
      hoverBorderWidth: 2,
      showTooltips: false,
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
        ctx.fillText('40%', centerX, centerY);
      },
    },
  ];

  lineChartData = [{ data: [165, 159, 180, 181, 256, 155, 240, 190, 200, 170], label: 'Total Practice Hours' }];
  lineChartLabels: Label[] = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
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
  lineChartColors = [
    {
      borderColor: '#376DC8',
      fill: false,
    },
  ];
  lineChartLegend = false;
  lineChartPlugins = [];
  lineGradient = { gradient: false };

  view: CalendarView = CalendarView.Month;
  selectedView = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 2),
      title: '2 Day Practice for club match',
      color: colors.blue,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'Maverick live event',
      color: colors.yellow,
    },
  ];

  players = [
    { name: 'Player 1', progress: 80, label: '300 Hours' },
    { name: 'Player 2', progress: 75, label: '256 Hours' },
    { name: 'Player 3', progress: 50, label: '124 Hours' },
    { name: 'Player 4', progress: 45, label: '85 Hours' },
    { name: 'Player 5', progress: 25, label: '70 Hours' },
    { name: 'Player 6', progress: 20, label: '70 Hours' },
  ];

  legends = [
    { name: 'Stamina Building', value: '30% (1.5 Hours)', color: '#f85951' },
    { name: 'Fundamentals', value: '30% (1.5 Hours)', color: '#333333' },
    { name: 'Skill Training', value: '30% (1.5 Hours)', color: '#39ab41' },
    { name: 'High Intensity', value: '30% (1.5 Hours)', color: '#f89751' },
  ];

  tradeRecords = [
    {
      drill_name: 'Drill Name',
      category: 'Drill Category',
      total_hours: '125 Hours',
    },
    {
      drill_name: 'Drill Name',
      category: 'Drill Category',
      total_hours: '125 Hours',
    },
    {
      drill_name: 'Drill Name',
      category: 'Drill Category',
      total_hours: '125 Hours',
    },
    {
      drill_name: 'Drill Name',
      category: 'Drill Category',
      total_hours: '125 Hours',
    },
    {
      drill_name: 'Drill Name',
      category: 'Drill Category',
      total_hours: '125 Hours',
    },
  ];
  tradeData = new MatTableDataSource(this.tradeRecords);
  displayedColumns: string[] = ['drill_name', 'category', 'total_hours'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
