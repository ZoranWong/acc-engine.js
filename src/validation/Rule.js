import RequestValidationError from "./RequestValidationError";

export default class Rule {
    name = null;
    options = {};
    failed = false;
    message = '';
    constructor (name, options = null) {
        this.name = name;
        this.options = options;
    }

    validate (value, attribute, messages, rules, params) {
        return true;
    }
}