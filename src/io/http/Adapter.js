export default class Adapter {
    #url = null;
    #data = {};
    #method = '';
    #app = null;
    constructor(app) {
        this.#app = app;
    }
    async request() {
        return false;
    }
    // async get(url, querys = {}) {
    //     this.#url = url;
    //     this.#data = querys;
    //     this.#method = 'GET';
    // }
    //
    // async post(url, data = {}) {
    //     this.#url = url;
    //     this.#data = data;
    //     this.#method = 'POST';
    // }
    //
    // async put(url, data = {}) {
    //     this.#url = url;
    //     this.#data = data;
    //     this.#method = 'PUT';
    // }
    //
    // async del(url, data = {}) {
    //     this.#url = url;
    //     this.#data = data;
    //     this.#method = 'DELETE';
    // }
}
