import { CLogEntry } from './c-log-model';
import { Observable, of } from 'rxjs';
import { CLogPublisher } from './c-log-publisher';

export class CLogConsole implements CLogPublisher {
  location: string;

  log(entry: CLogEntry): Observable<boolean> {
    // Log to console
    console.log(entry.buildLogString());
    return of(true);
  }
  clear(): Observable<boolean> {
    console.clear();
    return of(true);
  }
}
