import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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
export class PlayerDetailsComponent implements AfterViewInit {
  public lineChartData = [
    { data: [1, 2, 3, 4, 5, 3, 4], label: 'Average' },
    { data: [5, 9, 8, 1, 6, 5, 4], label: 'Player A' },
    { data: [5, 9, 5, 3, 6, 3, 7], label: 'Player B' },
  ];
  public lineChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public lineChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
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
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['k', 'BB%', 'HR', 'BsR', 'OBP', 'ISO', 'WAR Score', 'Def', 'Off', 'wRC +'];

  public radarChartLegend = false;
  public radarChartData = [
    { data: [65, 59, 90, 81, 56, 55, 40, 56, 55, 40], label: 'Player A' },
    { data: [28, 48, 40, 19, 96, 27, 100, 48, 40, 19], label: 'Player B' },
  ];
  public radarChartType: ChartType = 'radar';
  public radarChartColors: Color[] = [
    {
      borderColor: '#376DC8',
      backgroundColor: '#EAEEFF',
    },
    {
      borderColor: '#A52C00',
      backgroundColor: '#A52C00',
    },
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('myChart') myChart: ElementRef;
  context: CanvasRenderingContext2D;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  selectedView = 'month';
  viewDate: Date = new Date();
  tabvalue = 'pergame';

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: '3 Day Practice for club match',
      color: colors.blue,
      // actions: this.actions,
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
      // actions: this.actions,
    },
  ];

  activeDayIsOpen = false;

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
      date: '2019-20',
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

  ngAfterViewInit(): void {
    const gradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, '#A52C00');
    gradient.addColorStop(1, 'C5CEEF4D');
    this.lineChartColors = [
      {
        borderColor: gradient,
        backgroundColor: gradient,
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
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  // addEvent(): void {
  //   this.events = [
  //     ...this.events,
  //     {
  //       title: 'New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //       color: colors.red,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true,
  //       },
  //     },
  //   ];
  // }

  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.events = this.events.filter((event) => event !== eventToDelete);
  // }

  setView(event) {
    this.viewDate = new Date();
    this.selectedView = event.value;
    if (event.value === 'month') {
      this.view = CalendarView.Month;
    } else if (event.value === 'week') {
      this.view = CalendarView.Week;
    } else if (event.value === 'day') {
      this.view = CalendarView.Day;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  tabselect(value) {
    this.tabvalue = value;
  }
}
