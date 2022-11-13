import inquirer from 'inquirer'
import {TPrompt} from "./prompt.types";

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