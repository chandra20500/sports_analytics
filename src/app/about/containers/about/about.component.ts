import { Component, OnInit } from '@angular/core';
import { environment } from '@app/env/environment';

@Component({
  selector: 'app-about',
  template: `
    <div fxLayout="row" fxLayoutGap="8px" fxLayoutAlign="center center" class="padding-l">
      <div translate>Version</div>
      <div>{{ version }}</div>
    </div>
  `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit(): void {}
}
