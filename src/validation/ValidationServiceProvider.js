import ServiceProvider from "../constracts/ServiceProvider";
import Validator from "./Validator";
import In from "./rules/In";
import NotIn from "./rules/NotIn";
import Required from "./rules/Required";

export default class ValidationServiceProvider extends ServiceProvider{
    register () {
        this.app.singleton('validator', (app) => {
            return new Validator(app, {
                in: In,
                not_in: NotIn,
                required: Required
            });
        });
    }
}