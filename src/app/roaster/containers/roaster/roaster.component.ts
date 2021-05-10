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
  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Actual' },
    { data: [85, 69, 90, 91, 66, 65, 50], label: 'Forecast' },
  ];
  lineChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 5,
        backgroundColor: '#376DC8',
        borderWidth: 1,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
          ticks: {
            fontColor: '#768BC4',
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
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
  ];
  lineChartLegend = false;
  lineChartPlugins = [];
  lineGradient = { gradient: false };

  data = [
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

  dataSource = new MatTableDataSource(this.data);

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

  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
