import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  constructor() {}

  @Output() changeToggleStatus: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.changeToggleStatus.emit(false);
  }
}
