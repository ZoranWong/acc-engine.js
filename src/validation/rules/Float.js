import Rule from "../Rule";

export default class FloatRule extends Rule{
    name = 'float';
    floatRegex = /^(-|\+){0,1}\d+(\.\d+)$/;
    constructor (name = 'float', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if(this.floatRegex.test(value)) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must be a float number`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}