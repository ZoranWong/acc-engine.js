import Rule from "../Rule";

export default class IntegerRule extends Rule{
    name = 'integer';
    intRegex = /^(-|\+){0,1}\d+$/;
    constructor (name = 'integer', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if(this.intRegex.test(value)) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must be a integer number`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}