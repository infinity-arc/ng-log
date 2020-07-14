import { BrowserModule } from '@angular/platform-browser';

import { CLoggerModule } from 'ng-log';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    CLoggerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
