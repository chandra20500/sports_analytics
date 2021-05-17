import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  addMinutes,
} from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, collapseAnimation } from 'angular-calendar';
import { Subject, Observable } from 'rxjs';

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
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  @Input() navigation;
  @Input() size;
  @Input() view;
  @Input() selectedView;
  @Input() viewDate;
  @Input() events;
  @Input() startTime;
  @Input() endTime;
  @Output() newEvent = new EventEmitter<string>();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen = false;
  CalendarView = CalendarView;

  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: '3 Day Practice for club match',
  //     color: colors.blue,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'Maverick live event',
  //     color: colors.yellow,
  //   },
  // ];

  constructor() {}

  ngOnInit(): void {
    this.refresh.next();
  }

  refreshData() {
    this.refresh.next();
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
    this.events.forEach((ievent, index) => {
      if (ievent === event) {
        this.events[index].start = newStart;
        this.events[index].end = newEnd;
        this.events[index + 1].start = newEnd;
        this.events[index + 1].end = addMinutes(newEnd, 60);
      }
    });
    this.newEvent.emit(this.events);
    this.refreshData();
  }

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
}
