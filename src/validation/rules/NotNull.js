import Rule from "../Rule";

export default class NotNull extends Rule{
    name = 'not_null';
    constructor (name = 'not_null', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if(value !== null) {
            this.failed = false;
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value must be not null`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }
        this.failed = true;
        this.message = message;
        return false;
    }
}