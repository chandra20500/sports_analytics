import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-selection',
  templateUrl: 'team-selection.component.html',
  styleUrls: ['./team-selection.component.scss'],
})
export class TeamSelectionComponent implements OnInit {
  constructor(private router: Router) {}

  teams: Array<any> = [
    { id: '1', name: 'Denver Nuggets', logo: 'team1.png' },
    { id: '2', name: 'Dallas', logo: 'team2.png' },
    { id: '3', name: 'MTX', logo: 'team3.png' },
    { id: '4', name: 'Denver Nuggets', logo: 'team1.png' },
    { id: '5', name: 'Dallas', logo: 'team2.png' },
    { id: '6', name: 'MTX', logo: 'team3.png' },
    { id: '7', name: 'Denver Nuggets', logo: 'team1.png' },
    { id: '8', name: 'Dallas', logo: 'team2.png' },
    { id: '9', name: 'MTX', logo: 'team3.png' },
    { id: '10', name: 'Denver Nuggets', logo: 'team1.png' },
    { id: '11', name: 'Dallas', logo: 'team2.png' },
    { id: '12', name: 'MTX', logo: 'team3.png' },
    { id: '13', name: 'Dallas', logo: 'team2.png' },
    { id: '14', name: 'MTX', logo: 'team3.png' },
  ];
  selectedTeams = [];

  ngOnInit(): void {}

  teamSelect(event) {
    if (this.selectedTeams.includes(event)) {
      const index = this.selectedTeams.indexOf(event, 0);
      if (index > -1) {
        this.selectedTeams.splice(index, 1);
      }
    } else {
      this.selectedTeams.push(event);
    }
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
