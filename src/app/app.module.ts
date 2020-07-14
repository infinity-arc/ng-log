import { BrowserModule } from '@angular/platform-browser';

import { CLoggerModule } from '../../ng-log/c-log.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CLogService } from '../../ng-log/c-log.service';
// import { CommonModule } from '@angular/common';
// import { CLogConfigModel } from '../../ng-log/c-log-model';
// import { Log } from './log-stuff';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    CLoggerModule.forRoot()
  ],
  providers: [
    CLogService
    // Log,
    // CLogService,
    // {
    //   provide: 'CLOG_CONFIG',
    //   useValue: new CLogConfigModel()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
