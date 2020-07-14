
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { CLogConfigModel } from './c-log-model';
import { CLogService } from './c-log.service';
import { CLogPublisherService } from './c-log-publisher.service';
// import { InjectionToken } from '@angular/core';
// import { inject } from '@angular/core';

// const cLogPublisherService = new InjectionToken<any>('LogPublisher',{
//   factory: () => inject(HttpClientModule),
//   providedIn: 'root'
// });

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  providers: [
    {
      deps: [HttpClientModule],
      provide: CLogPublisherService,
      useFactory: publisherFactory => publisherFactory
    },
    {
      deps: [CLogPublisherService],
      provide: CLogService,
      useFactory: logService => logService
    }
  ]
})
export class CLoggerModule {
  // static forRoot(cLogConfig: CLogConfigModel = new CLogConfigModel()): ModuleWithProviders<any> {
  //   return {
  //     ngModule: CLoggerModule,

  //   };
  // }
}
