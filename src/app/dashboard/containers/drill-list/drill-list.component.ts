import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-drill-list',
  templateUrl: './drill-list.component.html',
  styleUrls: ['./drill-list.component.scss'],
})
export class DrillListComponent implements OnInit {
  data = [
    {
      name: 'Drill Name',
      category: 'Running',
      count: 5,
      duration: 60,
      goal: 'Test',
      performance: 'Test',
      result: 'D',
      usage: 80,
    },
    {
      name: 'Drill Name',
      category: 'Running',
      count: 10,
      duration: 60,
      goal: 'Test',
      performance: 'Test',
      result: 'A',
      usage: 70,
    },
  ];

  dataSource = new MatTableDataSource(this.data);

  displayedColumns: string[] = [
    'name',
    'category',
    'count',
    'duration',
    'goal',
    'performance',
    'result',
    'usage',
    'action',
  ];

  options = ['All Drills', 'Running', 'Speed', 'Jumping'];
  selectedOption = 'All Drills';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
