import Rule from "../Rule";

export default class Size extends Rule{
    name = 'size';
    size = 0;
    constructor (name = 'size', options) {
        super(name, options);
        this.size = options;
    }

    validate (value, attribute, messages, rules, params) {
        if(this.size > value.length) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value's length must smaller than ${this.size}`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}