import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
})
export class RoasterComponent implements OnInit {
  selectedButton = 'main roaster';
  data = [
    {
      name: 'Joe Philip',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      season: '2019-20',
      gp: 120,
      mp: 120,
      position: 'UB',
      workload: '85%',
      ppg: 10,
      seasonpoints: 125,
    },
    {
      name: 'Joe Philip',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      season: '2019-20',
      gp: 120,
      mp: 120,
      position: 'UB',
      workload: '85%',
      ppg: 10,
      seasonpoints: 125,
    },
  ];

  dataSource = new MatTableDataSource(this.data);

  displayedColumns: string[] = [
    'name',
    'age',
    'gender',
    'dob',
    'height',
    'weight',
    'season',
    'gp',
    'mp',
    'position',
    'workload',
    'ppg',
    'seasonpoints',
    'action',
  ];

  options = ['Overview', 'Performance', 'Growth', 'Points Scored'];
  selectedOption = 'Overview';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buttonChange(name) {
    this.selectedButton = name;
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
