import { CLogService } from '../../ng-log/c-log.service';


abstract class AbstractLogger extends CLogService {}


export class Logger extends AbstractLogger{}
