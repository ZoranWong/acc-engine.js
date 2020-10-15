import ServiceProvider from "../constracts/ServiceProvider";
import Validator from "./Validator";
import In from "./rules/In";
import NotIn from "./rules/NotIn";
import Required from "./rules/Required";
import Rule from "./Rule";
import Between from "./rules/Between";
import Max from "./rules/Max";
import Min from "./rules/Min";
import Float from "./rules/Float";
import IntegerRule from "./rules/Integer";
import NumberRule from "./rules/Number";
import StringRule from "./rules/String";
import Size from "./rules/Size";
import NotNull from "./rules/NotNull";

export default class ValidationServiceProvider extends ServiceProvider {
    register () {
        this.app.instance('validateRules', {
            in: In,
            not_in: NotIn,
            required: Required,
            between: Between,
            max: Max,
            min:Min,
            float: Float,
            number: NumberRule,
            integer: IntegerRule,
            string: StringRule,
            size: Size,
            not_null: NotNull
        });
        this.app.bind('validator', (app) => {
            return new Validator(app, this.app.get('validateRules'));
        });

        this.app.bindMethod('defineValidateRule', (name, callback) => {
            this.app.validateRules[name] = class extends Rule {
                validate (value, attribute, messages, rules, params) {
                    return callback(value, attribute, messages, rules, params, this);
                }
            }
        });
    }
}