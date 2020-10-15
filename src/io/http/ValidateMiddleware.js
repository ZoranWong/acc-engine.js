import RequestValidationError from "../../validation/RequestValidationError";

export default class ValidateMiddleware {
    /**
     * @param {Request} request
     * @param {Function} next
     * */
    async handle (request, next) {
        if(!request.passed()) {
            // console.log(request.errors())
            throw new RequestValidationError('request validate failed', request.errors());
        }
        return  await next(request);
    }
}