import Application from "../../foundation/Application";
import Adapter from "./Adapter";
import {extend} from 'underscore';
import Pipeline from "../../pipeline/Pipeline";
import HttpMethod from "./HttpMethod";

export default class Client {
    #app = null;
    #pipe = null;
    #headers = {};
    constructor(app) {
        this.#app = app;
        this.#pipe = new Pipeline(app);
    }

    /**
     * @return {Adapter}
     * */
    get adapter() {
        return this.app.httpAdapter;
    }


    set headers(val) {
        this.#headers = val;
    }

    get headers() {
        return this.#headers;
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
        let adapter = this.adapter;
        adapter.headers = this.headers;
        return await adapter.get(url, queries);
    }

    async post(url, data = {}) {
        let adapter = this.adapter;
        adapter.headers = this.headers;
        return await adapter.post(url, data);
    }

    async del(url, queries = {}) {
        let adapter = this.adapter;
        adapter.headers = this.headers;
        return await adapter.del(url, queries);
    }

    async put(url, data = {}) {
        let adapter = this.adapter;
        adapter.headers = this.headers;
        return await adapter.put(url, data);
    }

    /**
     * @property {Request} request
     * @property {FunctionConstructor|null} responseClass
     * */
    async send(request, responseClass = null) {
        responseClass = responseClass ?? this.app.config.http.responseClass;
        this.headers = extend(this.headers, this.app.config.http.headers);
        let middleware = this.app.config.http.middleware.concat(request.middleware);
        return await this.pipeline
            .through(...middleware)
            .send(request).then(/**@param {Request} request*/async (request) => {
                let headers = request.headers;
                this.headers = extend(this.headers, headers);
                let url = request.uri;
                /**@var {Response} response*/
                let response = null;
                switch (request.method) {
                    case HttpMethod.GET:
                        response = await this.get(url, request.data);
                        break;
                    case HttpMethod.POST:
                        response = await this.post(url, request.data);
                        break;
                    case HttpMethod.PUT:
                        response = await this.put(url, request.data);
                        break;
                    case HttpMethod.DELETE:
                        response = await this.del(url, request.data);
                        break;
                }
                if(response) {
                    responseClass =  responseClass ? responseClass : (request.responseClass ? request.responseClass : null );
                    return responseClass ? new responseClass(response.status, response.httpStatus, response.body, response.headers) : response;
                }else{
                    return null;
                }
            });

    }
}
