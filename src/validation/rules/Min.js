import Rule from "../Rule";

export default class Min extends Rule{
    name = 'min';
    min = 0;
    constructor (name = 'min', options) {
        super(name, options);
        this.min = options;
    }

    validate (value, attribute, messages, rules, params) {
        if(this.min <= value) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must bigger than ${this.max}`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}