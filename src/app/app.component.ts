import { Component } from '@angular/core';

// import { CLogService } from '../../ng-log/c-log.service';
// import { ServiceTest } from './service-test';
// import { Log } from './log-stuff';
// import { CLogConfigModel } from '../../ng-log/c-log-model';
// import { Log } from './log';
// const p = new CLogConfigModel();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-logger';
  constructor(private logger: Log) {
    console.log('st: ', this.logger);
    // console.log(this.logger);

    // this.logger.log('Test');

  }

  testLog() {
    // const values = ['1', 'Paul', 'Smith'];
    // this.logger.log('Test 2 Parameters', 'Paul', 'Smith');
    // this.logger.debug('Test Mixed Parameters', true, false, 'Paul', 'Smith');
    // this.logger.warn('Test String and Array', 'Some log entry', values);
  }
}
