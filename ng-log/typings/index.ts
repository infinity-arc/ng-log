// import { Observable } from 'rxjs';
import { CLogEntry } from '../c-log-model';

/**
 * @description c-log types
 */

export interface ICLogConfig {
  level: CLogLevel;
  logWithDate: boolean;
}

export interface ICLogEntry extends ICLogConfig {
  extraInfo: any;
  logWithDate: boolean;
}

export enum CLogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}

export interface ILogPublisherConfig {
  loggerName: string;
  loggerLocation: string;
  isActive: boolean;
}

export interface ILocalStorage {
  getItem(key: string): any;
  setItem(key: string, value: string): any;
}
