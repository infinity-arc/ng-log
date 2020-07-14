
import { CLogConsole } from './c-log-console';
import { CLogLocalStorage } from './c-log-localstorage';
import { CLogWebApi } from './c-log-webapi'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CLogPublisher } from './c-log-publisher';
import { catchError, map } from 'rxjs/operators';
import { ILogPublisherConfig } from './typings/index';
const PUBLISHERS_FILE = '/src/app/assets/default-config.json';

export class CLogPublisherService {
  publishers: CLogPublisher[] = [];
  constructor(private http: HttpClient) {
    // Build publishers arrays
    this.buildPublishers();
  }
  // Public properties
  getLoggers(): Observable<ILogPublisherConfig[]> {
    return new Observable<ILogPublisherConfig[]>(observer => {
      import('src/assets/default-config.json').then((file: any): any => {
        const confFile = file as { default: ILogPublisherConfig[] };
        console.log('file: ', file);
        observer.next(confFile.default);
      }).catch(err => observer.error(err));
    }).pipe(map(config => config)).pipe(catchError(this.handleErrors));
  }

  buildPublishers(): void {
    let logPub: CLogPublisher;
    this.getLoggers().subscribe(response => {
      response.filter(p => p.isActive).forEach(pub => {
        switch (pub.loggerName.toLowerCase()) {
          case 'console': logPub = new CLogConsole(); break;
          case 'localstorage': logPub = new CLogLocalStorage(); break;
          case 'webapi': logPub = new CLogWebApi(this.http); break;
        }
        logPub.location = pub.loggerLocation;
        this.publishers.push(logPub);
      });
    });
  }

  private handleErrors(error: any): Observable<any> {
    const errors: string[] = [];
    let msg = '';
    msg = `Status: ${error.status}`;
    msg += ` - Status Text: ${error.statusText}`;
    if (error) {
      msg += ` - Exception Message: ${error.exceptionMessage}`;
    }
    errors.push(msg);
    console.error('An error occurred', errors);
    return throwError(errors);
  }
}
