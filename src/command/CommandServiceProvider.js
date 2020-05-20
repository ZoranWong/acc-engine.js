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

                    this.commands[command.name()] = new commnad(this);
                });
            },
            command(...params) {
                return this.callMethodBinding('command', params);
            }
        });
        this.app.bindMethod('command', (commandName, ...params) => {
            let command = this.app.commands[commandName];
            return command.handle.apply(command, params)
        });
    }
}
