import {each, isString, map} from 'underscore';

export default class Validator {
    app;
    validateRules = {};
    errors = {};
    constructor (app, validateRules) {
        this.app = app;
        this.validateRules = validateRules;
    }

    validate (request) {
        let rules = request.rules();
        let messages = request.messages();
        let params = request.data;
        let passed = true;
        each(rules, (rule, attribute) => {
            let value = params[attribute];
            let attributeValidateRules = this.parseRule(rule);
            each(attributeValidateRules, (ruleValidator, rule) => {
                // console.log(attribute, rule)
                if(!ruleValidator.validate(value, attribute, messages, rules, params)) {
                    passed = false;
                    this.errors[attribute + '.' + rule] = ruleValidator.message;
                }
            });
        });
        return passed;
    }

    parseRule (rule) {
        let rules = rule;
        if (isString(rule)) {
            rules = rule.split('|');
        }
        let validators = {};
        each(rules, (value) => {
            let key, parameters;
            if (isString(value)) {
                [key, parameters] = value.split(':');
            } else {
                key = value['rule'];
                parameters = value['values'];
            }
            validators[key] = new this.validateRules[key](key, parameters);
        });
        return validators;
    }
}