
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CLogConfigModel } from './c-log-model';
import { CLogService } from './c-log.service';
import { CLogPublisherService } from './c-log-publisher.service';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule],
  exports: [],
  providers: []
})
export class CLoggerModule {
  static forRoot(cLogConfig: CLogConfigModel = new CLogConfigModel()): ModuleWithProviders<any> {
    return {
      ngModule: CLoggerModule,

    };
  }
}
