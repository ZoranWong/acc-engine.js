export default class Request {
    _headers = {};
    _data = {};
    _uri = '';
    _method = '';
    _middleware = [];

    get method() {
        return this._method;
    }

    async getHeaders() {
        return  this._headers;
    }

    get headers() {
        return this.getHeaders();
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
}