import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/* Breakpoints based in bootstrap */

const CUSTOM_BREAKPOINTS = [
  { alias: 'xs', mediaQuery: 'only screen and (min-width: 0px)' },
  { alias: 'sm', mediaQuery: 'only screen and (min-width: 576px)' },
  { alias: 'md', mediaQuery: 'only screen and (min-width: 768px)' },
  { alias: 'lg', mediaQuery: 'only screen and (min-width: 992px)' },
  { alias: 'xl', mediaQuery: 'only screen and (min-width: 1200px)' },
];

/**
 * Configure your material module with base material modules
 */
@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,

    FlexLayoutModule.withConfig({ disableDefaultBps: true }, CUSTOM_BREAKPOINTS),
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,

    FlexLayoutModule,
  ],
  providers: [
    // Configure Material components
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
  ],
})
export class MaterialModule {}
