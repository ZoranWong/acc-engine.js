export default class Response {
    #body = null;
    #status = null;
    #httpStatus = null;

    constructor(status, httpStatus, body) {
        this.#body = body;
        this.#status = status;
        this.#httpStatus = httpStatus;
    }

    set httpStatus(v) {
        this.#httpStatus = v;
    }

    get httpStatus() {
        return this.#httpStatus;
    }

    set status(v) {
        this.#status = v;
    }

    get status() {
        return this.#status;
    }

    set body(v) {
        this.#body = v;
    }

    get body() {
        return JSON.parse(this.#body);
    }
}