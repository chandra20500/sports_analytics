import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginContext } from '@app/auth/types/interfaces';

@Component({
  selector: 'app-login-form',
  template: `
    <form fxLayout="column" fxLayoutGap="16px">
      <app-input [label]="'Username'" [control]="usernameControl"></app-input>
      <app-input [label]="'Password'" [type]="'password'" [control]="passwordControl"></app-input>
      <mat-checkbox [formControl]="rememberControl">
        <span translate> Remember me </span>
      </mat-checkbox>

      <button mat-button [disabled]="loading || form.invalid" (click)="onLogin()">
        <span translate>Login</span>
      </button>
    </form>
  `,
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Input() loading: boolean;
  @Output() login = new EventEmitter<LoginContext>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }

  get usernameControl() {
    return this.form.get('username') as FormControl;
  }

  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  get rememberControl() {
    return this.form.get('remember') as FormControl;
  }

  onLogin() {
    const result: LoginContext = {
      username: this.usernameControl.value,
      password: this.passwordControl.value,
      remember: this.rememberControl.value,
    };

    this.login.emit(result);
  }
}
