import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();
  sidenavOpen = false;
  constructor(private router: Router) {}

  sidenavItems = [
    {
      name: 'Dashboard',
      hasChildren: false,
    },
    {
      name: 'Roster Builder',
      hasChildren: false,
    },
    {
      name: 'Scouting',
      hasChildren: false,
    },
    {
      name: 'Free Agents',
      hasChildren: false,
      children: [
        {
          name: '',
          status: '',
          hasChildren: false,
        },
      ],
    },
    {
      name: 'Staff',
      hasChildren: true,
      children: [
        {
          name: 'On field',
          hasChildren: false,
        },
        {
          name: 'Off field',
          hasChildren: false,
        },
      ],
    },
    {
      name: 'Communication',
      hasChildren: false,
    },
  ];

  ngOnInit(): void {}

  changePage() {
    this.router.navigateByUrl('/roaster');
    this.sidenavOpen = false;
  }

  onLogout() {
    this.logout.emit();
  }

  toogleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  onAbout() {
    this.router.navigate(['home', 'about']);
  }

  onUsers() {}
}
