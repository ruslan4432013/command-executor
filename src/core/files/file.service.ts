import {dirname, isAbsolute, join} from "path";
import {promises} from "fs";

export class FileService {
    public getFilePath(path: string, name: string, ext: string): string {
        if (!isAbsolute(path)) {
            path = join(__dirname + '/' + path)
        }
        return join(dirname(path) + '/' + name + '.' + ext)
    }

    private async isExist(path: string) {
        try {
            await promises.stat(path)
            return true
        } catch {
            return false
        }
    }

    async deleteFileIfExists(path: string) {
        if(await this.isExist(path)) {
            await promises.unlink(path)
        }
    }
}