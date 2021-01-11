import Rule from "../Rule";

export default class Between extends Rule{
    name = 'between';
    max = null;
    min = null;
    constructor (name = 'between', options) {
        super(name, options);
        [this.min, this.max] = this.options.split(',');
    }

    validate (value, attribute, messages, rules, params) {
        if(value >= this.min && value < this.max) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must between ${this.min} and ${this.max}`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}