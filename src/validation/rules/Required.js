import Rule from "../Rule";
import RequestValidationError from "../RequestValidationError";

export default class Required extends Rule {
    name = 'required';
    constructor (name = 'required', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if (value !== undefined) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value is required`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}