
import { CLogEntry } from './c-log-model';
import { Observable } from 'rxjs';

export abstract class CLogPublisher {
  location: string;
  abstract log(record: CLogEntry): Observable<boolean>;
  abstract clear(): Observable<boolean>;
}

