export default class Request {
    #headers = {};
    #data = {};
    #uri = '';
    #method = '';

    get method() {
        return this.#method;
    }

    async getHeaders() {
        return  this.headers;
    }

    get headers() {
        return this.getHeaders();
    }

    get data() {
        return this.#data;
    }

    get uri() {
        return this.#uri;
    }
}