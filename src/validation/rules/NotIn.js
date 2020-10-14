import Rule from "../Rule";
import {indexOf} from 'underscore';
import RequestValidationError from "../RequestValidationError";
import RequestValidationRuleOptionError from "../RequestValidationRuleOptionError";

export default class NotIn extends Rule {
    name = 'not_in';
    constructor (name = 'not_in', options) {
        super(name, null, options);
        this.callback = this.handle;
    }

    handle (value, attribute, messages, rules, params) {
        if (this.options) {
            /**@var Array options*/
            let options = this.options;
            if (indexOf(options, value) === -1) {
                return true;
            }
            let rule = attribute + '.' + this.name;
            let message = `attribute ${attribute} value is in [` + options.join(',') + ']';
            if(messages && messages[rule]) {
                message = messages[rule];
            }
            throw new RequestValidationError(message);
        } else {
            throw new RequestValidationRuleOptionError(`${attribute} validate rule ${this.name} has not parameters `);
        }
    }
}