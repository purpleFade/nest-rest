import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    const entry = `${context}\t${message}`;
    
    super.log(message, context);
  }

  error(message: any, stackOrContext?: string) {
    super.error(message, stackOrContext) {
        
    }
  }
}
