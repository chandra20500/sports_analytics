import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  data = [
    {
      name: 'Joe Philip',
      teamname: 'FC Dallas',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      season: 'S1',
      gp: 120,
      mp: 120,
      position: 'UB',
      workload: '85%',
      ppg: 10,
      seasonpoints: 125,
    },
    {
      name: 'Joe Philip',
      teamname: 'FC Dallas',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      season: 'S2',
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
    'teamname',
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

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
