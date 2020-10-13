import Application from "../../foundation/Application";
import Response from "./Response";
import UriParamParseMiddleware from "./UriParamParseMiddleware";

export default class Request {
    _headers = {};
    _data = {};
    _uri = '';
    _method = '';
    _middleware = [
        UriParamParseMiddleware
    ];
    _responseClass = Response;
    constructor () {
    }
    get method() {
        return this._method;
    }

    async getHeaders() {
        return  this._headers;
    }

    get responseClass() {
        return this._responseClass;
    }

    get headers() {
        return this._headers;
    }

    get data() {
        return this._data;
    }

    get uri() {
        return this._uri;
    }

    get middleware(){
        return this._middleware;
    }

    requestMiddleware() {
        return [];
    }

    static async send(...params) {
        let request = new this(...params);
        // noinspection JSUnresolvedFunction
        return  await Application.getInstance().http.send(request, request._responseClass);
    }

    rules () {
        return {

        };
    }

    messages () {
        return {

        };
    }
}