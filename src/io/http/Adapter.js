export default class Adapter {
    #url = null;
    #data = {};
    #method = '';
    #app = null;
    #headers = {};
    constructor(app) {
        this.#app = app;
    }

    set headers (val) {
        this.#headers = val;
    }

    get headers () {
        return this.#headers;
    }

    async get(url, queries = {}) {
        this.#url = url;
        this.#data = queries;
        this.#method = 'GET';
        return null;
    }

    async post(url, data = {}) {
        this.#url = url;
        this.#data = data;
        this.#method = 'POST';
        return null;
    }

    async put(url, data = {}) {
        this.#url = url;
        this.#data = data;
        this.#method = 'PUT';
        return null;
    }

    async del(url, data = {}) {
        this.#url = url;
        this.#data = data;
        this.#method = 'DELETE';
        return null;
    }
}
