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
  constructor(public router: Router) {}
  childOpen = {
    freeagent: false,
  };

  sidenavItems = [
    {
      name: 'Dashboard',
      hasChildren: false,
      childName: '',
      route: '/dashboard',
    },
    {
      name: 'Roster Builder',
      hasChildren: false,
      childName: '',
      route: '/roaster',
    },
    {
      name: 'Practice Plans',
      hasChildren: false,
      childName: '',
      route: '/practice-plans',
    },
    {
      name: 'Scouting',
      hasChildren: false,
      childName: '',
      route: '/scout',
    },
    {
      name: 'Free Agents',
      hasChildren: false,
      childName: 'freeagent',
      route: '/free-agent',
    },
    {
      name: 'Staff',
      hasChildren: true,
      childName: 'staff',
      route: '/staff',
      children: [
        {
          name: 'On field',
          hasChildren: false,
          route: '/dashboard',
        },
        {
          name: 'Off field',
          hasChildren: false,
          route: '/dashboard',
        },
      ],
    },
    {
      name: 'Communication',
      hasChildren: false,
      childName: '',
      route: '/dashboard',
    },
  ];

  ngOnInit(): void {}

  changePage(route) {
    this.router.navigateByUrl(route);
    this.sidenavOpen = false;
  }

  onLogout() {
    this.logout.emit();
  }

  toogleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  childopen(childid) {
    this.childOpen[childid] = !this.childOpen[childid];
  }

  onAbout() {
    this.router.navigate(['home', 'about']);
  }

  onUsers() {}
}
