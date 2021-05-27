import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  data = [
    {
      name: 'FC Dallas',
      members: 15,
      gender: 'Male',
      ageGroup: '19-20',
      avgWeight: 40,
      avgHeight: 160,
      bmi: 17.5,
      totalPracticeDays: 20,
      avgPracticeHours: 6,
      teamranking: 2,
    },
    {
      name: 'FC Dallas',
      members: 15,
      gender: 'Male',
      ageGroup: '19-20',
      avgWeight: 40,
      avgHeight: 160,
      bmi: 17.5,
      totalPracticeDays: 20,
      avgPracticeHours: 6,
      teamranking: 2,
    },
  ];

  dataSource = new MatTableDataSource(this.data);

  displayedColumns: string[] = [
    'name',
    'members',
    'gender',
    'ageGroup',
    'avgWeight',
    'avgHeight',
    'bmi',
    'totalPracticeDays',
    'avgPracticeHours',
    'teamranking',
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
