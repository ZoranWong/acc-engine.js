import Application from "../../foundation/Application";

export default class Request {
    _headers = {};
    _data = {};
    _uri = '';
    _method = '';
    _middleware = [];
    _responseClass = Response
    constructor () {
        this.requestMiddleware();
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
        return this._middleware.concat([]);
    }

    static async send(...params) {
        let request = new this(...params);
        // noinspection JSUnresolvedFunction
        return  await Application.getInstance().http.send(request, request._responseClass);
    }
}