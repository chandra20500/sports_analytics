import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromGuards from './guards';

import { ApiPrefixInterceptor, ErrorHandlerInterceptor } from '@app/core/interceptors';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [],
  providers: [
    ...fromGuards.guards,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
  exports: [HttpClientModule],
})
export class CoreModule {}
