import Application from "../../foundation/Application";
import Response from "./Response";
import UriParamParseMiddleware from "./UriParamParseMiddleware";
import ValidateMiddleware from "./ValidateMiddleware";
import HttpMethod from "./HttpMethod";
import HttpRequestOption, {instanceOfHttpRequestOptions} from "./HttpRequestOption";

export default class Request {
    _headers = {};
    _data = {};
    _uri = '';
    _method = 'GET';
    _middleware = [
        ValidateMiddleware,
        UriParamParseMiddleware
    ];
    _responseClass = Response;
    /**@property Application _app*/
    _app;
    _validator;

    /**
     * @param HttpRequestOption options
     * */
    constructor (options = null) {
        this._app = Application.getInstance();
        this._validator = this._app.get('validator');
        if (options && instanceOfHttpRequestOptions(options)) {
            for (let key in options) {
                if (options[key] && typeof this[`_${key}`] !== 'undefined') {
                    this[`_${key}`] = options[key];
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
        console.log(this);
        let request = new this(...params);
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