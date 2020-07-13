// tslint:no
// import { ICLogConfig } from './c-log-types';
// import { CLogLevel } from './c-log-types';

import { CLogLevel, ICLogConfig, ICLogEntry } from './typings';
import { CFormatParams } from './c-log-format-params';

export class CLogConfigModel implements ICLogConfig {
  constructor(
    public level: CLogLevel = CLogLevel.All,
    public logWithDate: boolean = true
  ) { }
}


export class CLogEntry extends CFormatParams implements ICLogEntry {
  extraInfo: any;
  level: CLogLevel;
  logWithDate: boolean;
  message: any;

  buildLogString(): string {
    let ret = '';

    if (this.logWithDate) {
      ret = new Date() + ' - ';
    }
    ret += `Type: ` + CLogLevel[this.level];
    ret += ` - Message: ` + this.message;
    if (this.extraInfo.length) {
      ret += ` - Extra Info: ` + this.formatParams(this.extraInfo);
    }
    (this.level === 1) && console.log('ret-string: ', ret);
    return ret;

  }
}
