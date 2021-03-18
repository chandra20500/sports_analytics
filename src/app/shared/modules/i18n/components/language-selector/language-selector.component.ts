import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/shared/i18n/services';

@Component({
  selector: 'app-language-selector',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="languageMenu">
      {{ currentLanguage }}
    </button>

    <mat-menu #languageMenu="matMenu">
      <button *ngFor="let language of languages" mat-menu-item (click)="setLanguage(language)">
        {{ language | translate }}
      </button>
    </mat-menu>
  `,
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {}
  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
