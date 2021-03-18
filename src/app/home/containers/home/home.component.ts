import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/auth/services';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
    <app-home-shell (logout)="onLogout()">
      <router-outlet></router-outlet>
    </app-home-shell>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  onLogout() {
    this.authenticationService
      .logout()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.router.navigate(['auth']));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
