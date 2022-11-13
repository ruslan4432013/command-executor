import {TPrompt} from "./prompt.types.js";
import inquirer from 'inquirer'


export class PromptService {
    public async input<T>(message: string, type: TPrompt) {

        const { result } = await inquirer.prompt<{result: T}>([
            {
                type,
                name: 'result',
                message
            }
        ])
        return result
    }
}