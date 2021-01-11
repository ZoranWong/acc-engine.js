import Rule from "../Rule";

export default class NumberRule extends Rule{
    numberRegex = /^(-|\+){0,1}\d+(\.\d+)*$/;
    constructor (name = 'number', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if(this.numberRegex.test(value)) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must be a  number`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}