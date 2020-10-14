import Rule from "../Rule";
import RequestValidationError from "../RequestValidationError";

export default class Required extends Rule {
    name = 'required';
    constructor (name = 'required', options) {
        super(name, null, options);
        this.callback = this.handle;
    }

    handle (value, attribute, messages, rules, params) {
        console.log(attribute, value);
        if (value) {
            return true;
        }
        let rule = attribute + '.' + this.name;
        let message = `attribute ${attribute} value is required`;
        if(messages && messages[rule]) {
            message = messages[rule];
        }

        throw new RequestValidationError(message);
    }
}