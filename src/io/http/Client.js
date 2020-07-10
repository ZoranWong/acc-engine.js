import Application from "../../foundation/Application";
import Adapter from "./Adapter";
import {extend} from 'underscore';
import Pipeline from "../../pipeline/Pipeline";

export default class Client {
    #app = null;
    #commonHeaders = {};
    #pipe = null;

    constructor(app, headers) {
        this.#app = app;
        this.#pipe = new Pipeline(app);
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

    get headers() {
        return this.adapter.headers;
    }

    /**
     * @return {Application}
     * */
    get app() {
        return this.#app;
    }

    /**
     * @return {Pipeline}
     * */
    get pipeline() {
        return this.#pipe;
    }

    async get(url, queries = {}) {
        return await this.adapter.get(url, queries);
    }

    async post(url, data = {}) {
        return await this.adapter.post(url, data);
    }

    async del(url, queries = {}) {
        return await this.adapter.del(url, queries);
    }

    async put(url, data = {}) {
        return await this.adapter.put(url, data);
    }

    /**
     * @property {Request} request
     * @property {FunctionConstructor} responseClass
     * */
    async send(request, responseClass) {
        let headers = await request.headers;
        this.headers = extend(this.headers, this.#commonHeaders, headers);
        let middleware = this.app.config.http.middleware.concat(request.middleware);
        return await this.pipeline
            .through(...middleware)
            .send(request).then(/**@param {Request} request*/async (request) => {
                console.log('---------------------')
                let url = request.uri;
                let response = null;
                switch (request.method) {
                    case 'GET':
                        response = await this.get(url, request.data);
                        break;
                    case 'POST':
                        response = await this.post(url, request.data);
                        break;
                    case 'PUT':
                        response = await this.put(url, request.data);
                        break;
                    case 'DELETE':
                        response = await this.del(url, request.data);
                        break;
                }
                return response;
            });

    }
}
