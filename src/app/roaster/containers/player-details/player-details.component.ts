import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
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
  lineChartData = [
    { data: [1, 2, 3, 3, 2, 2, 3], label: 'Average' },
    { data: [5, 9, 8, 7, 6, 7, 8], label: 'Player A' },
    { data: [5, 9, 5, 4, 6, 3, 7], label: 'Player B' },
  ];
  lineChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 2,
      },
    },
    legend: { position: 'bottom' },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: '#768BC4',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            max: 10,
            stepSize: 2,
            beginAtZero: true,
            fontColor: '#768BC4',
          },
        },
      ],
    },
  };
  lineChartColors = [
    {
      borderColor: '#EAEEFF',
      backgroundColor: '#EAEEFF',
    },
    {
      borderColor: '#376DC8',
      fill: false,
    },
    {
      borderColor: '#A52C00',
      fill: false,
    },
  ];
  lineChartLegend = false;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];
  lineGradient = { gradient: true, startColor: '#FFFFFF', endColor: '#C5CEEF4D' };

  radarChartOptions: RadialChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  };
  radarChartLabels: Label[] = ['k', 'BB%', 'HR', 'BsR', 'OBP', 'ISO', 'WAR Score', 'Def', 'Off', 'wRC +'];

  radarChartLegend = false;
  radarChartData = [
    { data: [65, 59, 90, 81, 56, 55, 40, 56, 55, 40], label: 'Player A' },
    { data: [28, 48, 40, 19, 96, 27, 100, 48, 40, 19], label: 'Player B' },
  ];
  radarChartType: ChartType = 'radar';
  radarChartColors: Color[] = [
    {
      borderColor: '#376DC8',
      backgroundColor: '#EAEEFF',
    },
    {
      borderColor: '#A52C00',
      backgroundColor: '#A52C00',
    },
  ];

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

  conditions = [
    { key: 'Experience', value: '3 years' },
    { key: 'Position', value: 'G/F' },
    { key: 'Height', value: '6`8' },
    { key: 'Weight', value: '205 lbs' },
    { key: 'Birth Date', value: '10/06/2002' },
    { key: 'College', value: 'G League' },
  ];
  tabvalue = 'pergame';

  seasonlements = [
    {
      season: '2018-19',
      age: 19,
      gp: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 19.9,
    },
    {
      season: '2019-20',
      age: 20,
      gp: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 38,
    },
  ];

  recentlements = [
    {
      date: '1/1/19',
      opp: 19,
      gr: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 19.9,
    },
    {
      date: '1/2/19',
      opp: 20,
      gr: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 38,
    },
  ];

  seasonData = new MatTableDataSource(this.seasonlements);
  recentData = new MatTableDataSource(this.recentlements);

  seasonColumns: string[] = [
    'season',
    'age',
    'gp',
    'mp',
    'fg',
    'pt3',
    'ft',
    'reb',
    'ast',
    'stl',
    'blk',
    'tov',
    'pf',
    'pts',
  ];
  recentColumns: string[] = [
    'date',
    'opp',
    'gr',
    'mp',
    'fg',
    'pt3',
    'ft',
    'reb',
    'ast',
    'stl',
    'blk',
    'tov',
    'pf',
    'pts',
  ];

  practices = [1, 1, 1, 1];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }

  tabselect(value) {
    this.tabvalue = value;
  }
}
