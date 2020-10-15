import Rule from "../Rule";

export default class Max extends Rule{
    name = 'max';
    max = 0;
    constructor (name = 'max', options) {
        super(name, options);
        this.max = options;
    }

    validate (value, attribute, messages, rules, params) {
        if(this.max > value) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must smaller than ${this.max}`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}