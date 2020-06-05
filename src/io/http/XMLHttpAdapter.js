import Adapter from './Adapter';
import Response from "./Response";

export default class XMLHttpAdapter extends Adapter {
    constructor(app) {
        super(app);
    }

    #xmlHttpRequest() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            for (let key in this.headers) {
                request.setRequestHeader(key, this.headers[key]);
            }
            request.open(this.method, this.url, true);
            try{
                request.onreadystatechange = function (event) {
                    if (request.readyState === XMLHttpRequest.DONE) {
                        let status = request.status;
                        if (status >= 200 && status < 400) {

                            return resolve(new Response(true, status, request.responseText));
                        } else {
                            // Oh no! There has been an error with the request!
                            return resolve(new Response(false, status, request.responseText));
                        }
                    }
                };
                request.onerror = (errnoError) => {
                    resolve(new Response(false, request.status, request.responseText));
                }
                request.send(this.data);
            }catch (e) {
                resolve(new Response(false, request.status, request.responseText));
            }
        })
    }

    async get(url, queries = {}) {
        await super.get(url, queries);
        return await this.#xmlHttpRequest();
    }

    async post(url, data = {}) {
        await super.post(url, data);
        return await this.#xmlHttpRequest();
    }

    async put(url, data = {}) {
        await super.put(url, data);
        return await this.#xmlHttpRequest();
    }

    async del(url, data = {}) {
        await super.del(url, data);
        return await this.#xmlHttpRequest();
    }
}
