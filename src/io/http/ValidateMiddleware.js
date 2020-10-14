export default class ValidateMiddleware {
    /**
    * @var Application _app
    * */
    _app;
    constructor (app) {
        this._app = app;
    }
    /**
     * @param {Request} request
     * @param {Function} next
     * */
    async handle (request, next) {
        /**@var Validator validator*/
        let validator = this._app.get('validator');
        validator.validate(request)
        return  await next(request);
    }
}