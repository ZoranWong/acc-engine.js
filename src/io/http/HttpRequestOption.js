import HttpMethod from "./HttpMethod";
import Response from "./Response";
import {isObject} from "underscore";

export default class HttpRequestOption {
    headers = null;
    data = null;
    uri = null;
    method = HttpMethod.GET;
    middleware = null;
    responseClass = Response

    constructor (options) {
        for (let key in options) {
            this[key] = options[key];
        }
    }
}

export function instanceOfHttpRequestOptions (obj) {
    if(!obj || !isObject(obj)) {
        return false;
    }
    for (let key in obj) {
        if (typeof HttpRequestOption.prototype[key] !== 'undefined') {
            return true;
        }
    }
    return false;
}