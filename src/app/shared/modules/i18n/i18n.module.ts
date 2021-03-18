import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [SharedModule],
  exports: [...fromComponents.components],
})
export class I18nModule {}
