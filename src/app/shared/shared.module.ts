import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import * as fromComponents from './components';
import * as fromPipes from './pipes';
import * as fromDirectives from './directives';

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes, ...fromDirectives.directives],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, TranslateModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  providers: [],
})
export class SharedModule {}
