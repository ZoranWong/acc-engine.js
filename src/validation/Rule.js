import RequestValidationError from "./RequestValidationError";

export default class Rule {
    name = null;
    options = {};
    callback = () => {};
    failed = false;
    message = '';
    constructor (name, callback = null, options = null) {
        this.name = name;
        this.callback = callback;
        this.options = options;
    }

    validate (value, options, attribute, messages, rules, params) {
        if(this.callback) {
            if(this.callback(value, options, attribute, messages, rules, params, this)) {
                return true;
            }else{
                return false;
            }
        }
    }
}