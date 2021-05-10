import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    LayoutModule,
    MatStepperModule,
    MatRadioModule,
    MatSortModule,
    MatTooltipModule,
    FlexLayoutModule,
    DragDropModule,
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
