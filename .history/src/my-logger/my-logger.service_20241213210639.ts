import { ConsoleLogger, Injectable } from '@nestjs/common';
import { fstat } from 'fs';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
    async logToFile(entry) {
        const formattedEntry = `${Intl.DateTimeFormat('en-US', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'UTC',
        }).format(new Date())}\t${entry}\n`;

        try {
            if (!fstat.existsSync)
        } catch (error) {
            
        }
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
