import { Inject } from '@angular/core';
import { CLogConfigModel, CLogEntry } from './c-log-model';
import { CLogLevel } from './typings';
import { CLogPublisherService } from './c-log-publisher.service';
import { CLogPublisher } from './c-log-publisher';
import { HttpClient } from '@angular/common/http';

export class CLogService {
  level;
  logWithDate;
  publishers: CLogPublisher[];
  constructor(
    private pubService: CLogPublisherService
    // @Inject('HTTP_CLIENT') private httpClient: HttpClient
  ) {
    // super(httpClient);
    this.level = 0;
    this.level = true;
    this.publishers = Inject(CLogPublisherService).pubService.publishers;
  }

  private shouldLog(level: CLogLevel): boolean {
    console.log('level: ', level);
    const ret = ((level >= this.level && level !== CLogLevel.Off) || this.level === CLogLevel.All);
    console.log('this.level: ', this.level);
    console.log('shouldLog: ', ret);
    return ret;
  }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, CLogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, CLogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, CLogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, CLogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, CLogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, CLogLevel.All, optionalParams);
  }

  private writeToLog(msg: string, level: CLogLevel, params: any[]) {
    (level = CLogLevel.Debug) && console.log('params: ', params);
    (level = CLogLevel.Debug) && console.log('level: ', level);
    (level = CLogLevel.Debug) && console.log('msg: ', msg);
    if (this.shouldLog(level)) {
      const entry: CLogEntry = new CLogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      this.publishers.forEach(logger => logger.log(entry).subscribe(response => console.log(response)));
    }
  }
}
