import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
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
      season: '2019-20',
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
      season: '2019-20',
      position: 'UB',
      workload: '85%',
    },
  ];

  dataSource = new MatTableDataSource(this.elements);
  displayedColumns: string[] = [
    'name',
    'age',
    'gender',
    'dob',
    'height',
    'weight',
    'season',
    'position',
    'workload',
    'action',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.elements);
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
