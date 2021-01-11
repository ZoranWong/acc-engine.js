import Rule from "../Rule";
import {isString} from "underscore";

export default class StringRule extends Rule{
    name = 'string';
    constructor (name = 'string', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if(isString(value)) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must be a string`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}