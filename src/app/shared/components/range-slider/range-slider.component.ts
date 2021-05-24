import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: 'range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit {
  @Input() minValue;
  @Input() maxValue;
  @Input() rangeOptions;

  constructor() {}

  ngOnInit(): void {}
}
