import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-selection',
  templateUrl: 'team-selection.component.html',
  styleUrls: ['./team-selection.component.scss'],
})
export class TeamSelectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  teams: Array<any> = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1];

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
