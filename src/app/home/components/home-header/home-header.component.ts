import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.logout.emit();
  }

  onAbout() {
    this.router.navigate(['home', 'about']);
  }

  onUsers() {}
}
