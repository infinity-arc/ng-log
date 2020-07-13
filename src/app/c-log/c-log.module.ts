
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CLogConfigModel } from './c-log-model';
import { CLogService } from './c-log.service';
import { CLogPublisherService } from './c-log-publisher.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, BrowserModule]
})
export class CLoggerModule {
  static forRoot(cLogConfig: CLogConfigModel = new CLogConfigModel()): ModuleWithProviders {
    return {
      ngModule: CLoggerModule,
      providers: [{
        provide: 'CLOG_CONFIG',
        useValue: cLogConfig
      },
        CLogPublisherService,
        CLogService
      ]
    };
  }
}
