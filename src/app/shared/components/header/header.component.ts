import { Component, EventEmitter, OnInit, AfterViewInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '@app/shared/services/sidenav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() logout = new EventEmitter<void>();
  sidenavOpen = false;
  constructor(public router: Router, private sidenavService: SidenavService) {}

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
    // {
    //   name: 'Scouting',
    //   hasChildren: false,
    //   childName: '',
    //   route: '/scout',
    // },
    // {
    //   name: 'Free Agents',
    //   hasChildren: false,
    //   childName: 'freeagent',
    //   route: '/free-agent',
    // },
    // {
    //   name: 'Staff',
    //   hasChildren: true,
    //   childName: 'staff',
    //   route: '/staff',
    //   children: [
    //     {
    //       name: 'On field',
    //       hasChildren: false,
    //       route: '/dashboard',
    //     },
    //     {
    //       name: 'Off field',
    //       hasChildren: false,
    //       route: '/dashboard',
    //     },
    //   ],
    // },
    // {
    //   name: 'Communication',
    //   hasChildren: false,
    //   childName: '',
    //   route: '/communication',
    // },
  ];

  ngOnInit(): void {
    localStorage.setItem('role', 'admin');
    this.checkDashboardRoutes(this.router.url);
  }

  ngAfterViewInit(): void {
    this.sidenavService.changeToggleStatus.subscribe((status) => {
      this.sidenavOpen = false;
    });
  }

  changePage(route) {
    this.router.navigateByUrl(route);
    this.sidenavOpen = false;

    this.checkDashboardRoutes(route);
  }

  onLogout() {
    this.logout.emit();
  }

  toogleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  setRole(event) {
    localStorage.setItem('role', event.value);
    if (event.value === 'admin') {
      this.router.navigateByUrl('dashboard/admin');
    } else {
      this.router.navigateByUrl('dashboard');
    }
  }

  getRoleData() {
    return localStorage.getItem('role');
  }

  childopen(childid) {
    this.childOpen[childid] = !this.childOpen[childid];
  }

  onAbout() {
    this.router.navigate(['home', 'about']);
  }

  checkDashboardRoutes(route: any) {
    if (route.includes('dashboard')) {
      const path = this.getRoleData();
      if (path.includes('admin')) {
        this.router.navigateByUrl('dashboard/admin');
      } else if (path.includes('dashboard')) {
        this.router.navigateByUrl('dashboard');
      }
    }
  }

  onUsers() {}
}
