import Rule from "../Rule";

export default class NotEmpty extends Rule{
    name = 'not_empty';
    constructor (name = 'not_empty', options) {
        super(name, options);
    }

    validate (value, attribute, messages, rules, params) {
        if(value !== '' && value !== null && typeof value !== 'undefined') {
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