import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { addHours, format, addDays, subDays, isAfter } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import { CalendarComponent } from '../../../shared/components/calendar/calendar.component';
import { AddDrillsComponent } from '../../components/add-drills/add-drills.component';

const colors: any = {
  others: {
    primary: '#E4EBF7',
    secondary: '#E4EBF7',
  },
  interval: {
    primary: '#F7E3E1',
    secondary: '#F7E3E1',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-add-practice-plans',
  templateUrl: './add-practice-plans.component.html',
  styleUrls: ['./add-practice-plans.component.scss'],
})
export class AddPracticePlansComponent implements OnInit {
  selectedForm = 'name';
  playerType = 'name';
  trainingPrograms = [
    {
      name: 'Name a Physical Training 1',
      duration: { startTime: '08:00', endTime: '16:00' },
      count: 'Count',
      level: 'Level',
    },
    {
      name: 'Name a Physical Training 2',
      duration: { startTime: '08:00', endTime: '15:00' },
      count: 'Count',
      level: 'Level',
    },
    {
      name: 'Name a Physical Training 3',
      duration: { startTime: '09:00', endTime: '16:00' },
      count: 'Count',
      level: 'Level',
    },
    {
      name: 'Name a Physical Training 4',
      duration: { startTime: '09:00', endTime: '15:00' },
      count: 'Count',
      level: 'Level',
    },
    {
      name: 'Name a Physical Training 5',
      duration: { startTime: '08:00', endTime: '16:00' },
      count: 'Count',
      level: 'Level',
    },
  ];
  players = [
    { name: 'Player Name 1', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 2', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 3', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 4', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 5', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 6', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 7', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 8', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 9', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Name 10', position: '(Position)', available: 12, booked: 10 },
  ];
  playerGroups = [
    { name: 'Player Group 1', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 2', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 3', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 4', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 5', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 6', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 7', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 8', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 9', position: '(Position)', available: 12, booked: 10 },
    { name: 'Player Group 10', position: '(Position)', available: 12, booked: 10 },
  ];
  drills = [
    { name: 'Drill Name 1', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Name 2', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Name 3', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Name 4', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Name 5', category: 'Drill Category', hours: 2, reps: 3 },
  ];

  existingDates = [
    format(addDays(new Date(), 3), 'MM-dd-yyyy'),
    format(addDays(new Date(), 5), 'MM-dd-yyyy'),
    format(addDays(new Date(), 6), 'MM-dd-yyyy'),
    format(addDays(new Date(), 8), 'MM-dd-yyyy'),
  ];
  selectedTrainingProgram = [];
  selectedPlayers = [];
  selectedDrills = [];
  date = format(new Date(), 'MM-dd-yyyy');
  calendarDate = new Date();
  startTime = '08:00';
  endTime = '14:00';
  minDate = new Date();
  currentTime = new Date(new Date().setHours(8, 0, 0));

  view: CalendarView = CalendarView.Day;
  selectedView = 'day';
  viewDate: Date = new Date();
  actions: CalendarEventAction[] = [
    {
      label: 'edit',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        console.log(event);
        // this.removeevent('Edited', event);
      },
    },
    {
      label: 'delete',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        // this.handleEvent('Deleted', event);
      },
    },
  ];
  events: CalendarEvent[] = [];
  @ViewChild(CalendarComponent) calendar: CalendarComponent;
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  changeForm(value) {
    this.selectedForm = value;
  }

  changeSelected(value) {
    this.playerType = value;
  }

  programDrop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.programChange();
    }
  }

  programChange() {
    console.log(this.selectedTrainingProgram);
    this.startTime = this.selectedTrainingProgram[0].duration.startTime;
    this.endTime = this.selectedTrainingProgram[0].duration.endTime;
  }

  playerDrop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.container.data.length
      );
    }
  }

  playerOrder(event) {
    moveItemInArray(this.selectedPlayers, event.previousIndex, event.currentIndex);
  }

  drillDrop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.container.data.length
      );
      this.orderTimeslots(event.container.data.length);
    }
  }

  drillOrder(event) {
    moveItemInArray(this.selectedDrills, event.previousIndex, event.currentIndex);
  }

  addDrill() {
    const dialogRef = this.dialog.open(AddDrillsComponent, {
      width: '60%',
      disableClose: false,
      data: {
        type: 'add',
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
      }
    });
  }

  removeItem(pData, cData, pIndex, cIndex, type) {
    transferArrayItem(pData, cData, pIndex, cIndex);
    if (type === 'drills') {
      this.events.splice(pIndex * 2, 2);
      this.calendar.refreshData();
      this.eventsUpdate(this.events);
    }
  }

  orderTimeslots(index) {
    const endTime = new Date(new Date().setHours(parseInt(this.endTime.split(':')[0], 10) + 1, 0, 0));
    let startTime = this.currentTime;
    this.currentTime = addHours(this.currentTime, 2);
    if (endTime.getTime() >= this.currentTime.getTime()) {
      this.events.push({
        start: startTime,
        end: this.currentTime,
        title:
          '<div class="drillname">' +
          this.selectedDrills[index - 1].name +
          '</div> <div class="cate">' +
          this.selectedDrills[index - 1].category +
          '</div> <div class="time" ><img src="assets/images/icons/clock.svg" />' +
          format(startTime, 'hh:mm aaa') +
          ' - ' +
          format(this.currentTime, 'hh:mm aaa') +
          '</div>',
        cssClass: 'event-class',
        color: colors.others,
        allDay: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
        actions: this.actions,
      });
      startTime = this.currentTime;
      this.currentTime = addHours(this.currentTime, 1);
      if (endTime.getTime() >= this.currentTime.getTime()) {
        this.events.push({
          start: startTime,
          end: this.currentTime,
          title: '<img src="assets/images/icons/interval.svg" />Interval',
          cssClass: 'interval-class',
          color: colors.interval,
          allDay: false,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          // draggable: true,
        });
      } else {
        this.events.splice(this.events.length - 1, 1);
        transferArrayItem(this.selectedDrills, this.drills, this.selectedDrills.length - 1, this.drills.length);
        window.alert('Time exceeded handling.');
        this.eventsUpdate(this.events);
      }
    } else {
      this.eventsUpdate(this.events);
      transferArrayItem(this.selectedDrills, this.drills, this.selectedDrills.length - 1, this.drills.length);
      window.alert('Time exceeded handling.');
    }
    this.calendar.refreshData();
  }

  eventsUpdate(event) {
    this.events = event;
    if (this.events.length > 0) {
      let time = new Date(new Date().setHours(parseInt(this.startTime.split(':')[0], 10), 0, 0));
      this.events.forEach((element) => {
        if (element.end.getTime() >= time.getTime()) {
          time = element.end;
        }
      });
      this.currentTime = time;
    } else {
      this.currentTime = new Date(new Date().setHours(parseInt(this.startTime.split(':')[0], 10), 0, 0));
    }
  }

  onDateSelected(date) {
    this.calendarDate = date;
    this.date = format(date, 'MM-dd-yyyy');
  }

  filterDates(date) {
    const existingDates = [
      format(addDays(new Date(), 3), 'MM-dd-yyyy'),
      format(addDays(new Date(), 5), 'MM-dd-yyyy'),
      format(addDays(new Date(), 6), 'MM-dd-yyyy'),
      format(addDays(new Date(), 8), 'MM-dd-yyyy'),
    ];
    const newDate = format(date, 'MM-dd-yyyy');
    if (existingDates.includes(newDate)) {
      return false;
    } else {
      return true;
    }
  }

  dateClass() {
    return (date: Date) => {
      const newDate = format(date, 'MM-dd-yyyy');
      if (newDate === this.date) {
        return 'available-date';
      } else if (isAfter(date, subDays(new Date(), 1))) {
        if (this.existingDates.includes(newDate)) {
          return '';
        } else {
          return 'available-date';
        }
      }
    };
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
