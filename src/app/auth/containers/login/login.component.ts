import { Component, OnInit } from '@angular/core';
import { LoginContext } from '@app/auth/types/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/auth/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  template: `
    <div fxLayout="row" fxLayoutAlign="center center" class="height-full">
      <div class="container padding-l">
        <div fxLayout="row" fxLayoutAlign="space-between center" class="margin-bottom-l">
          <h1 translate>APP_NAME</h1>
          <app-language-selector></app-language-selector>
        </div>

        <app-login-form [loading]="loggingIn" (login)="onLogin($event)"></app-login-form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loggingIn: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onLogin(context: LoginContext) {
    this.loggingIn = true;
    this.authenticationService
      .login(context)
      .pipe(finalize(() => (this.loggingIn = false)))
      .subscribe((credentials) => {
        this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
      });
  }
}
