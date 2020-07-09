import ServiceProvider from '../constracts/ServiceProvider';
import {
    isArray,
    each
} from 'underscore';
import Command from "./Command";

export default class CommandServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('commands', () => {
            return new Map();
        });
        let commands = this.app.commands;
        this.app.mixin({
            registerCommand(...commands) {
                let commandMap = {};
                if (commands.length === 2) {
                    let [key, command] = commands;
                    commandMap[key] = command;
                } else if (commands.length && !isArray(commands[0])) {
                    commandMap = commands[0];
                }

                each(commandMap, /**@param {Function|Command} command*/(command, key) => {
                    this.commands.set(key, new command(this));
                });
            },
            command: async (commandName, ...params) => {
                let command = commands.get(commandName);
                if (command)
                    return await command.handle(...params);
            }
        });
    }
}
