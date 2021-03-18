import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  template: `
    <mat-toolbar>
      <mat-toolbar-row fxLayout="row" fxLayoutAlign="space-between center">
        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="16px" class="height-full">
          <img class="logo" src="assets/ngx-rocket-logo.png" alt="angular logo" />
          <h1 translate>APP_NAME</h1>
        </div>

        <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="16px">
          <button mat-button (click)="onAbout()">About</button>
          <button mat-button (click)="onUsers()">Users</button>
          <app-language-selector></app-language-selector>
          <button mat-button (click)="onLogout()">Logout</button>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.logout.emit();
  }

  onAbout() {
    this.router.navigate(['home', 'about']);
  }

  onUsers() {}
}
