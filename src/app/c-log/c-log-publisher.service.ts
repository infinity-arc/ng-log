import { Injectable } from '@angular/core';
import { CLogConsole } from './c-log-console';
import { CLogLocalStorage } from './c-log-localstorage';
import { CLogWebApi } from './c-log-webapi'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CLogPublisher } from './c-log-publisher';

@Injectable()
export class CLogPublisherService {

  constructor(private http: HttpClient) {
    // Build publishers arrays
    this.buildPublishers();
  }

  // Public properties
  publishers: CLogPublisher[] = [];

  // Build publishers array
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push(new CLogLocalStorage());
    this.publishers.push(new CLogConsole());
    this.publishers.push(new CLogWebApi(this.http));
  }

  private handleErrors(error: any): Observable<any> {
    const errors: string[] = [];
    let msg = '';

    msg = 'Status: ' + error.status;
    msg += ' - Status Text: ' + error.statusText;
    if (error.json()) {
      msg += ' - Exception Message: ' + error.json().exceptionMessage;
    }
    errors.push(msg);

    console.error('An error occurred', errors);

    return Observable.throw(errors);
  }
}
