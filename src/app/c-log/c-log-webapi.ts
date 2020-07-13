import { CLogPublisher } from './c-log-publisher';
import { Observable, of, throwError } from 'rxjs';
import { CLogEntry } from './c-log-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

export class CLogWebApi extends CLogPublisher {
  constructor(private http: HttpClient) {
    // Must call super() from derived classes
    super();
    // Set location
    this.location = '/api/log';
  }

  // Add log entry to back end data store
  log(entry: CLogEntry): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    // const options = new HttpRequest<ICLogEntry>('POST', this.location, entry, { headers, responseType: 'json' });

    return this.http.post<boolean>(this.location, entry, { headers, responseType: 'json' })
      .pipe(catchError(this.handleErrors)).pipe(map(response => response.json()));
  }

  // Clear all log entries from local storage
  clear(): Observable<boolean> {
    // TODO: Call Web API to clear all values
    return of(true);
  }

  private handleErrors(error: any):
    Observable<any> {
    const errors: string[] = [];
    let msg = '';

    msg = 'Status: ' + error.status;
    msg += ' - Status Text: ' + error.statusText;
    if (error) {
      msg += ' - Exception Message: ' + error.exceptionMessage;
    }
    errors.push(msg);
    console.error('An error occurred', errors);
    return throwError(errors);
  }
}
