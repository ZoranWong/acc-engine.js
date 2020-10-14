import RequestValidationError from "./RequestValidationError";

export default class Rule {
    name = null;
    options = {};
    callback = () => {};
    constructor (name, callback = null, options = null) {
        this.name = name;
        this.callback = callback;
        this.options = options;
    }

    validate (value, options, attribute, messages, rules, params) {
        if(this.callback) {
            if(this.callback(value, options, attribute, messages, rules, params)) {
                return true;
            }else{
                throw new RequestValidationError('');
            }
        }
    }
}