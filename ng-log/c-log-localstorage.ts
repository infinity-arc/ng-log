
import {  ILocalStorage } from './typings/index';

import { CLogEntry } from './c-log-model';
import { Observable, of } from 'rxjs';
import { CLogPublisher } from './c-log-publisher';

export class CLogLocalStorage implements CLogPublisher {
  private _localStorage: ILocalStorage;
  location;
  constructor() {
    // Must call super() from derived classes
    // super();
    // Set location
    this.location = 'logging';
    this._localStorage = localStorage;
  }

  get localStorage(): ILocalStorage {return this._localStorage; }

  // Append log entry to local storage
  log(entry: CLogEntry): Observable<boolean> {
    let ret = false;
    let values: CLogEntry[];

    try {
      // Get previous values from local storage
      values = JSON.parse(this.localStorage.getItem(this.location))
              || [];
      // Add new log entry to array
      values.push(entry);
      // Store array into local storage
      this.localStorage.setItem(this.location, JSON.stringify(values));

      // Set return value
      ret = true;
    } catch (ex) {
      // Display error in console
      console.log(ex);
    }

    return of(ret);
  }

  // Clear all log entries from local storage
  clear(): Observable<boolean> {
    localStorage.removeItem(this.location);
    return of(true);
  }
}
