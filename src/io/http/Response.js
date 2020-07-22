export default class Response {
    #body = null;
    #status = null;
    #headers = {};
    #httpStatus = null;

    constructor(status, httpStatus, body, headers = {}) {
        this.body = body;
        this.status = status;
        this.httpStatus = httpStatus;
        this.headers = headers;
    }

    set httpStatus(httpStatus) {
        this.#httpStatus = httpStatus;
    }

    get httpStatus() {
        return this.#httpStatus;
    }

    set status(status) {
        this.#status = status;
    }

    get status() {
        return this.#status;
    }

    set body(body) {
        this.#body = body;
    }

    get body() {
        try{
            return this.#body ? JSON.parse(this.#body) : null;
        }catch (e) {
            return this.#body;
        }
    }

    set headers(headers){
        this.#headers = headers;
    }

    get headers() {
        return this.#headers;
    }
}