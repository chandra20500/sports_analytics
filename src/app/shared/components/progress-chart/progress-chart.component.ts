import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-chart',
  templateUrl: 'progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss'],
})
export class ProgressChartComponent implements OnInit {
  @Input() data;
  @Input() size;
  constructor() {}

  ngOnInit(): void {}
}
