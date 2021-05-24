import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  @Input() title;
  @Input() value;
  @Input() src;
  @Input() lightText;
  @Input() classes;
  @Input() iconClass;

  ngOnInit(): void {}
}
