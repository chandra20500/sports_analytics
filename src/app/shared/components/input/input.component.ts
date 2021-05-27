import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field class="width-full" [color]="color" [hintLabel]="hint">
      <mat-label *ngIf="label">{{ label | translate }}</mat-label>
      <div fxLayout="row" fxLayoutAlign="start center">
        <mat-icon *ngIf="prefixIcon" matPrefix [svgIcon]="prefixIcon"></mat-icon>
        <input
          matInput
          #input
          [formControl]="control"
          [placeholder]="placeholder | translate"
          autocomplete="off"
          [type]="type"
          [required]="isRequired"
        />
        <mat-icon *ngIf="suffixIcon" matSuffix [svgIcon]="suffixIcon"> </mat-icon>
        <mat-spinner *ngIf="loading" diameter="16"> </mat-spinner>
      </div>

      <mat-hint *ngIf="maxLength" align="end"> {{ input.value?.length }}/{{ maxLength }} </mat-hint>
      <mat-hint *ngIf="minValue && maxValue" align="end"> Value between: {{ minValue }} - {{ maxValue }} </mat-hint>
      <mat-hint *ngIf="minValue && !maxValue" align="end"> Min: {{ minValue }} </mat-hint>
      <mat-hint *ngIf="!minValue && maxValue" align="end"> Max: {{ maxValue }} </mat-hint>

      <mat-error *ngIf="control.hasError('required')"> {{ label || 'This field' }} is required </mat-error>
      <mat-error *ngIf="control.hasError('email')" translate> Invalid email</mat-error>
      <mat-error *ngIf="control.hasError('pattern')" translate> Invalid value</mat-error>
      <mat-error *ngIf="control.hasError('min')">
        {{ minValueError(control) }}
      </mat-error>
      <mat-error *ngIf="control.hasError('max')">
        {{ maxValueError(control) }}
      </mat-error>
      <mat-error *ngIf="control.hasError('maxlength')">
        {{ maxLengthError(control) }}
      </mat-error>
      <mat-error *ngFor="let error of errors | keyvalue">
        <ng-container *ngIf="displayError(error.key)">
          {{ error | json }}
        </ng-container>
      </mat-error>
    </mat-form-field>
  `,
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() placeholder: string;
  @Input() prefixIcon: string;
  @Input() suffixIcon: string;
  @Input() type = 'text';
  @Input() loading = false;
  @Input() hint: string;
  @Input() maxLength: number;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() color: ThemePalette = 'primary';

  customErrors = ['required', 'email', 'pattern', 'min', 'max', 'maxlength'];

  constructor() {}

  ngOnInit() {}

  get errors(): any {
    return this.control.errors;
  }

  get isRequired(): boolean {
    if (this.control.validator) {
      const validator = this.control.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  displayError(error): boolean {
    return !this.customErrors.includes(error);
  }

  maxLengthError(control: AbstractControl): string {
    const requiredLength = (Object.values(control.errors) as any[]).find(
      (_error) => !!_error.requiredLength
    ).requiredLength;
    return `Maximum number of characters allowed is ${requiredLength}`;
  }

  minValueError(control: AbstractControl): string {
    const minValue = (Object.values(control.errors) as any[]).find((_error) => !!_error.min).min;
    return `Minimum allowed value is ${minValue}`;
  }

  maxValueError(control: AbstractControl): string {
    const maxValue = (Object.values(control.errors) as any[]).find((_error) => !!_error.max).max;
    return `Maximum allowed value is ${maxValue}`;
  }
}
