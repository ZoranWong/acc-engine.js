import Application from "../../foundation/Application";
import Adapter from "./Adapter";
import {extend} from 'underscore';
export default class Client {
    #app = null;
    #commonHeaders = {};
    constructor(app, headers) {
        this.#app = app;
        this.#commonHeaders = headers;
    }
    /**
     * @return {Adapter}
     * */
    get adapter() {
        return this.app.httpAdapter;
    }

    set headers(val) {
        this.adapter.headers = val;
    }

    get headers () {
        return this.adapter.headers;
    }

    /**
     * @return {Application}
     * */
    get app(){
        return this.#app;
    }

    async get(url, queries = {}) {
        return  await this.adapter.get(url, queries);
    }

    async post(url, data = {}) {
        return  await this.adapter.post(url, data);
    }

    async del(url, queries = {}) {
        return  await this.adapter.del(url, queries);
    }

    async put(url, data = {}) {
        return await this.adapter.put(url, data);
    }

    /**
     * @property {Request} request
     * @property {FunctionConstructor} responseClass
     * */
    async send(request, responseClass) {
        this.headers = extend(this.headers, this.#commonHeaders, await request.headers);
        let url = request.uri;
        switch (request.method) {
            case 'GET':
                return await this.get(url, request.data);
            case 'POST':
                return await this.post(url, request.data);
            case 'PUT':
                return await this.put(url, request.data);
            case 'DELETE':
                return await this.del(url, request.data)
        }

        return null;
    }
}
