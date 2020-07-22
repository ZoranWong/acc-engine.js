export default class Adapter {
    #url = null;
    #data = {};
    #method = '';
    #app = null;
    #headers = {};
    #gateway = '';
    constructor(app) {
        this.#app = app;
        this.#gateway = app.config.http.gateway;
    }

    trim(str, x) {
        let reg = new RegExp(`^${x}+|${x}+$`);
        return str.replace(reg,'');
    }

    get method() {
        return this.#method.toUpperCase();
    }

    get url(){
        return this.trim(this.#gateway, '/') + '/' + this.trim(this.#url, '/');
    }
    /**
     * @return {String}
     * */
    get gateway() {
        return this.#gateway;
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

    get data () {
        return this.#data;
    }
}
