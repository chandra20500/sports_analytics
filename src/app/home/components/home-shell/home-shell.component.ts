import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-shell',
  template: `
    <div>
      <app-home-header (logout)="onLogout()"></app-home-header>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./home-shell.component.scss'],
})
export class HomeShellComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onLogout() {
    this.logout.emit();
  }
}
