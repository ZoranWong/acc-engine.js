import Adapter from './Adapter';
import Response from "./Response";
import {isString} from "underscore";
import

export default class XMLHttpAdapter extends Adapter {
    constructor (app) {
        super(app);
    }

    #xmlHttpRequest () {
        return new Promise((resolve, reject) => {
            try {
                let request = new XMLHttpRequest();
                request.open(this.method, this.url, true);
                for (let key in this.headers) {
                    request.setRequestHeader(key, this.headers[key]);
                }
                if (!this.headers['Content-Type'])
                    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
                request.onreadystatechange = function (event) {
                    if (request.readyState === XMLHttpRequest.DONE) {
                        let status = request.status;
                        let headerStr = request.getAllResponseHeaders();
                        let headers = headerStr.split('\n');
                        console.log(headers);
                        headers = headers.map((header, index) => {
                            let [key, value] = header.split(':');
                            if(typeof key === 'undefined' || typeof value === 'undefined') {
                                return ;
                            }
                            header = {};
                            header[key.trim()] = value.replace(/[\n\r\t]/, '').trim();
                            return header;
                        });
                        if (status >= 200 && status < 400) {
                            return resolve(new Response(true, status, request.responseText, headers));
                        } else {
                            // Oh no! There has been an error with the request!
                            return resolve(new Response(false, status, request.responseText, headers));
                        }
                    }
                };
                request.onerror = (errnoError) => {
                    resolve(new Response(false, request.status, request.responseText));
                }
                request.send(isString(this.data) || this.data instanceof FormData ? this.data : JSON.stringify(this.data));
            } catch (e) {
                resolve(new Response(false, request.status, request.responseText));
            }
        })
    }

    async get (url, queries = {}) {
        await super.get(url, queries);
        return await this.#xmlHttpRequest();
    }

    async post (url, data = {}) {
        await super.post(url, data);
        return await this.#xmlHttpRequest();
    }

    async put (url, data = {}) {
        await super.put(url, data);
        return await this.#xmlHttpRequest();
    }

    async del (url, data = {}) {
        await super.del(url, data);
        return await this.#xmlHttpRequest();
    }
}
