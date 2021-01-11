export default class RequestValidationError extends Error{
    errors = {};
    constructor (message, errors) {
        super(message);
        this.errors = errors;
    }
}