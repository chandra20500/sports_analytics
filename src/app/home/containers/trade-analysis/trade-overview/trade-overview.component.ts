import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade-overview',
  templateUrl: './trade-overview.component.html',
  styleUrls: ['./trade-overview.component.scss'],
})
export class TradeOverviewComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
