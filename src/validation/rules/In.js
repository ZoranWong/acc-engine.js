import Rule from "../Rule";
import {indexOf} from 'underscore';
import RequestValidationError from "../RequestValidationError";
import RequestValidationRuleOptionError from "../RequestValidationRuleOptionError";

export default class In extends Rule {
    name = 'in';
    constructor (name = 'in', options) {
        super(name, options);
        this.options = options.split(',');
    }

    validate (value, attribute, messages, rules, params) {
        if (this.options) {
            /**@var Array options*/
            let options = this.options;
            if (indexOf(options, value) > -1) {
                this.failed = false;
                return true;
            }
            let rule = attribute + '.' + this.name;
            let message = `attribute ${attribute} value is not in [` + options.join(',') + ']';
            if(messages && messages[rule]) {
                message = messages[rule];
            }
            this.failed = true;
            this.message = message;
            return false;
        } else {
            this.message = `${attribute} validate rule ${this.name} has not parameters`;
            this.failed = true;
            return false;
        }
    }
}