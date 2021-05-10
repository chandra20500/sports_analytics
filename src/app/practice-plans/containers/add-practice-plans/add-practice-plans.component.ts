import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { addHours, differenceInDays } from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { CalendarComponent } from '../../../shared/components/calendar/calendar.component';
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
  selector: 'app-add-practice-plans',
  templateUrl: './add-practice-plans.component.html',
  styleUrls: ['./add-practice-plans.component.scss'],
})
export class AddPracticePlansComponent implements OnInit {
  selectedForm = '';
  playerType = 'name';
  drillType = 'name';
  trainingPrograms = [
    { name: 'Name a Physical Training 1', duration: 'Duration', count: 'Count', level: 'Level' },
    { name: 'Name a Physical Training 2', duration: 'Duration', count: 'Count', level: 'Level' },
    { name: 'Name a Physical Training 3', duration: 'Duration', count: 'Count', level: 'Level' },
    { name: 'Name a Physical Training 4', duration: 'Duration', count: 'Count', level: 'Level' },
    { name: 'Name a Physical Training 5', duration: 'Duration', count: 'Count', level: 'Level' },
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
  drillGroups = [
    { name: 'Drill Group 1', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Group 2', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Group 3', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Group 4', category: 'Drill Category', hours: 2, reps: 3 },
    { name: 'Drill Group 5', category: 'Drill Category', hours: 2, reps: 3 },
  ];
  selectedTrainingProgram = [];
  selectedPlayers = [];
  selectedDrills = [];
  date = new Date().toISOString().substring(0, 10);
  startTime = '08:00';
  endTime = '14:00';
  currentTime = new Date(new Date().setHours(8, 0, 0));

  view: CalendarView = CalendarView.Day;
  selectedView = 'day';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  @ViewChild(CalendarComponent) calendar: CalendarComponent;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeForm(value) {
    this.selectedForm = value;
  }

  changeSelected(type, value) {
    if (type === 'drill') {
      this.drillType = value;
    }
    if (type === 'player') {
      this.playerType = value;
    }
  }

  programDrop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
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
        title: this.selectedDrills[index - 1].name,
        color: colors.blue,
        allDay: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      });
      startTime = this.currentTime;
      this.currentTime = addHours(this.currentTime, 1);
      if (endTime.getTime() >= this.currentTime.getTime()) {
        this.events.push({
          start: startTime,
          end: this.currentTime,
          title: 'Interval',
          color: colors.red,
          allDay: false,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true,
        });
      } else {
        this.events.splice(this.events.length - 1, 1);
        if (this.drillType === 'name') {
          transferArrayItem(this.selectedDrills, this.drills, this.selectedDrills.length - 1, this.drills.length);
        } else {
          transferArrayItem(
            this.selectedDrills,
            this.drillGroups,
            this.selectedDrills.length - 1,
            this.drillGroups.length
          );
        }
        window.alert('Time exceeded');
        this.eventsUpdate(this.events);
      }
    } else {
      this.eventsUpdate(this.events);
      if (this.drillType === 'name') {
        transferArrayItem(this.selectedDrills, this.drills, this.selectedDrills.length - 1, this.drills.length);
      } else {
        transferArrayItem(
          this.selectedDrills,
          this.drillGroups,
          this.selectedDrills.length - 1,
          this.drillGroups.length
        );
      }
      window.alert('Time exceeded');
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

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
