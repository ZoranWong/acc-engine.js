import ServiceProvider from '../constracts/ServiceProvider';
import {
    isArray
} from 'underscore';
import Command from "./Command";

export default class CommandServiceProvider extends ServiceProvider {
    register() {
        this.app.instance('commands', new Map());
        this.app.mixin({
            registerCommand(...commands) {
                let commandMap = {};
                if (commands.length === 2) {
                    let [key, command] = commands;
                    commandMap[key] = command;
                } else if (commands.length && !isArray(commands[0])) {
                    commandMap = commands[0];
                }

                commandMap.forEach(/**@param {Function|Command} command*/(command, key) => {
                    this.commands.set(key, new command(this));
                });
            },
            command(...params) {
                return this.callMethodBinding('command', params);
            }
        });
        this.app.bindMethod('command', (commandName, ...params) => {
            let command = this.app.commands.get(commandName);
            return command.handle(...params);
        });
    }
}
