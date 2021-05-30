import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChartLegendOptions, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements OnInit {
  selectedTableButton = 'physical';
  selectedChartButton = 'physical';
  dashBarChartLabels: Label[] = ['Drill1', 'Drill2', 'Drill3'];
  dashBarChartLegend = true;
  dashBarChartPlugins = [
    {
      beforeDraw(chart: any) {
        const ctx = chart.ctx;
        const _stroke = ctx.stroke;
        // tslint:disable-next-line:space-before-function-paren
        ctx.stroke = function () {
          ctx.save();
          ctx.shadowColor = '#999999';
          ctx.shadowBlur = 5;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;
          _stroke.apply(this, arguments);
          ctx.restore();
        };

        const _fill = ctx.fill;
        // tslint:disable-next-line:space-before-function-paren
        ctx.fill = function () {
          ctx.save();
          ctx.shadowColor = '#999999';
          ctx.shadowBlur = 8;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;
          _fill.apply(this, arguments);
          ctx.restore();
        };
      },
    },
  ];
  dashBarChartData = [
    {
      data: [120, 150, 120],
      label: 'This player',
      stack: 'a',
      barThickness: 15,
    },
    {
      data: [200, 190, 150],
      label: 'Batch average',
      stack: 'b',
      barThickness: 15,
    },
  ];
  dashBarGradient = { gradient: false };
  dashBarChartColors = [
    {
      borderColor: '#376DC8',
      backgroundColor: '#376DC8',
    },
    {
      borderColor: '#F98436',
      backgroundColor: '#F98436',
    },
  ];

  dashBarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: { display: false },
    title: {
      display: false,
      text: 'Custom Chart Title',
    },
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
            display: true,
            autoSkip: true,
            max: 240,
            stepSize: 80,
            beginAtZero: true,
            fontSize: 7,
            padding: 10,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      backgroundColor: '#FFF',
      titleFontSize: 12,
      titleFontColor: '#161616',
      bodyFontColor: '#8D8D8D',
      bodyFontSize: 13,
      displayColors: true,
      titleMarginBottom: 10,
      bodySpacing: 5,
      xPadding: 10,
      yPadding: 10,
      mode: 'label',
      callbacks: {
        title: (tooltipItem, data) => {
          const total = 0;
          return ['Total Practice Hours : ' + total];
        },
        label: (tooltipItem: any, data: any) => {
          const dstLabel = data.datasets[tooltipItem.datasetIndex].label;
          const yLabel = tooltipItem.yLabel;
          return dstLabel + ': ' + yLabel;
        },
      },
    },
  };

  lineChartData = [
    { data: [5, 9, 8, 7, 6, 7, 8, 3, 6, 8], label: 'Player A' },
    { data: [1, 2, 3, 3, 2, 2, 3, 5, 8, 5], label: 'Average' },
  ];
  lineChartLabels: Label[] = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 6,
        hitRadius: 8,
        borderWidth: 4,
        backgroundColor: '#FFFFFF',
        hoverRadius: 8,
        hoverBorderWidth: 4,
      },
    },
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        boxWidth: 15,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: 'rgba(0,0,0,0.5)',
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
            max: 10,
            stepSize: 2.5,
            display: false,
            beginAtZero: false,
            fontColor: '#768BC4',
          },
        },
      ],
    },
  };
  lineChartColors = [
    {
      borderColor: '#63B1EC',
      fill: false,
    },
    {
      borderColor: '#F98436',
      fill: false,
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];
  lineGradient = { gradient: false };

  radarChartOptions: RadialChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      gridLines: {
        display: true,
        circular: true,
        color: '#E6E6E6',
        lineWidth: 0.3,
      },
      pointLabels: {
        fontColor: '#CCE8FF',
        fontFamily: 'Montserrat',
        fontStyle: 'Bold',
        fontSize: 10,
      },
      angleLines: {
        color: '#E6E6E6',
        lineWidth: 0.3,
      },
      ticks: {
        maxTicksLimit: 6,
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    legend: {
      align: 'start',
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#CCE8FF',
        fontFamily: 'Montserrat',
        fontSize: 6,
        fontStyle: 'Medium',
        padding: 35,
        boxWidth: 14,
      },
    },
  };
  radarChartLabels: Label[] = [
    'Running',
    'Jumping',
    'Jogging',
    'Sprinting',
    'Squats',
    'Physical',
    'Skill 1',
    'Skill 2',
  ];

  radarChartData = [
    { data: [65, 60, 40, 30, 25, 20, 90, 70], label: 'Player A', type: 'polarArea' },
    { data: [5, 95, 20, 81, 36, 55, 40, 56], label: 'Average', order: 1 },
  ];
  radarChartColors = [
    {
      backgroundColor: '#ffffff',
      borderColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: '#ffffff',
      borderColor: 'rgba(0,0,0,0)',
    },
  ];
  radarChartType: ChartType = 'radar';

  view: CalendarView = CalendarView.Month;
  selectedView = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: addDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Match 1',
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
      title: 'Match 2',
      color: colors.yellow,
    },
  ];

  conditions = [
    { key: 'Experience', value: '3 years' },
    { key: 'Position', value: 'G/F' },
    { key: 'Height', value: '6`8' },
    { key: 'Weight', value: '205 lbs' },
    { key: 'Birth Date', value: '10/06/2002' },
    { key: 'College', value: 'G League' },
  ];
  tabvalue = 'pergame';
  tabValueDrill = 'physical';

  recentColumns: string[] = ['date', 'opp', 'gr', 'mp', 'fg', 'pt3'];

  recentlements = [
    {
      date: 'Drill1',
      opp: 'HH:MM',
      gr: 'HH:MM',
      mp: 'HH:MM',
      fg: 'HH:MM',
      pt3: 'HH:MM',
    },
    {
      date: 'Drill2',
      opp: 'HH:MM',
      gr: 'HH:MM',
      mp: 'HH:MM',
      fg: 'HH:MM',
      pt3: 'HH:MM',
    },
    {
      date: 'Drill3',
      opp: 'HH:MM',
      gr: 'HH:MM',
      mp: 'HH:MM',
      fg: 'HH:MM',
      pt3: 'HH:MM',
    },
    {
      date: 'Drill4',
      opp: 'HH:MM',
      gr: 'HH:MM',
      mp: 'HH:MM',
      fg: 'HH:MM',
      pt3: 'HH:MM',
    },
    {
      date: 'Drill5',
      opp: 'HH:MM',
      gr: 'HH:MM',
      mp: 'HH:MM',
      fg: 'HH:MM',
      pt3: 'HH:MM',
    },
  ];

  recentData = new MatTableDataSource(this.recentlements);

  practices = [1, 1, 1, 1];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }

  tabselect(value) {
    this.tabvalue = value;
  }

  tabselectdrill(value) {
    this.tabValueDrill = value;
  }

  tableButtonChange(name) {
    this.selectedTableButton = name;
  }

  chartButtonChange(name) {
    this.selectedChartButton = name;
  }
}
