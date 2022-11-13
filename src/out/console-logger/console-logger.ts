import {IStreamLogger} from "../../core/handlers/stream-logger.interface.js";


export class ConsoleLogger implements IStreamLogger {
    private static instance: ConsoleLogger;

    private constructor() {
    }

    public static get(): ConsoleLogger {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger()
        }
        return ConsoleLogger.instance
    }

    end(): void {
        console.log('Done')
    }

    error(...args: any[]): void {
        console.log('Errors:')
        console.log(...args)
    }

    log(...args: any[]): void {
        console.log('Log:')
        console.log(...args)
    }

}