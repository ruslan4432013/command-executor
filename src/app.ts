import {FfmpegExecutor} from "./commands/ffmpeg/ffmpeg.executor.js";
import {ConsoleLogger} from "./out/console-logger/console-logger.js";

export class App {
    async run() {
        await new FfmpegExecutor(ConsoleLogger.get()).execute()
    }
}

const app = new App()
app.run()