import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
})
export class RoasterComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  elements = [
    {
      name: 'John',
      age: 23,
      gender: 'Male',
      dob: '03-10-1990',
      height: '5.7',
      weight: '113',
      position: 'LB',
      workload: '80%',
    },
    {
      name: 'Joe Philip',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      position: 'UB',
      workload: '85%',
    },
  ];

  dataSource = new MatTableDataSource(this.elements);
  // displayedColumns: string[] = ['name', 'team', 'age', 'gender', 'dob','height','weight', 'bmi', 'phv', 'time_10', 'time_20', 'vertical_jump',
  //   'triple_jump', 'dribbling', 'passing', 'l_drill_left', 'l_drill_right'];

  displayedColumns: string[] = ['name', 'age', 'gender', 'dob', 'height', 'weight', 'position', 'workload'];
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.elements);
  }
}
