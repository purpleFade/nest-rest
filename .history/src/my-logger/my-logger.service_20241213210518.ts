import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
    async logToFile(entry) {
        
    }

  log(message: any, context?: string) {
    const entry = `${context}\t${message}`;

    super.log(message, context);
  }

  error(message: any, stackOrContext?: string) {
    const entry = `${stackOrContext}\t${message}`;

    super.error(message, stackOrContext);
  }
}