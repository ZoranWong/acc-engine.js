import Application from "../../foundation/Application";
import Response from "./Response";
import UriParamParseMiddleware from "./UriParamParseMiddleware";
import ValidateMiddleware from "./ValidateMiddleware";
import HttpMethod from "./HttpMethod";
import HttpRequestOption, {instanceOfHttpRequestOptions} from "./HttpRequestOption";
import {isArray} from 'underscore';

export default class Request {
    _headers = {};
    _data = {};
    _uri = '';
    _name = null;
    _method = 'GET';
    _middleware = [
        ValidateMiddleware,
        UriParamParseMiddleware
    ];
    _responseClass = null;
    /**@property Application _app*/
    _app;
    _validator;

    /**
     * @param HttpRequestOption options
     * */
    constructor (options = null) {
        this._app = Application.getInstance();
        this._validator = this._app.get('validator');
        this._name = this.constructor.name;
        if (arguments.length === 1 && options && instanceOfHttpRequestOptions(options)) {
            for (let key in options) {
                if (options[key] && typeof this[`_${key}`] !== 'undefined') {
                    if (key !== 'middleware')
                        this[`_${key}`] = options[key];
                    else
                        this._middleware.concat(isArray(options['middleware']) ? options['middleware'] : [options['middleware']]);
                }
            }
        }
    }

    get method () {
        return this._method;
    }

    async getHeaders () {
        return this._headers;
    }

    get responseClass () {
        return this._responseClass;
    }

    get headers () {
        return this._headers;
    }

    get data () {
        return this._data;
    }

    get uri () {
        return this._uri;
    }

    get middleware () {
        return this._middleware;
    }

    get name () {
        return this._name;
    }

    /**
     * @return {Application}
     * */
    get app () {
        return this._app;
    }

    get httpClient () {
        return this.app.http;
    }

    static async send (...params) {
        let request = new this(...params);
        console.log(request, '==========', params);
        return await request.httpClient.send(request, request._responseClass);
    }

    rules () {
        return {};
    }

    messages () {
        return {};
    }

    passed () {
        return this._validator.validate(this);
    }

    errors () {
        return this._validator.errors;
    }

    setHeader (name, value) {
        this._headers[name] = value;
        return this;
    }

    getHeader (name) {
        return this._headers[name];
    }
}