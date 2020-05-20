import ServiceProvider from '../constracts/ServiceProvider';
import {
    isArray
} from 'underscore';
import Command from "./Command";
export default class CommandServiceProvider extends ServiceProvider {
    register() {
        this.app.instance('commands', new Map());
        this.app.mixin({
            registerCommand(commands) {
                if(!isArray(commands)) {
                    commands = [commands];
                }

                commands.forEach(/**@param {Function|Command} command*/(command) => {
                    this.commands.set(command['name'](), new command(this));
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
