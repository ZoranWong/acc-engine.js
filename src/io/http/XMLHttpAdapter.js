import Adapter from './Adapter';
export default class XMLHttpAdapter extends Adapter {
    constructor(app) {
        super(app);
    }
    #xmlHttpRequest() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            for(let key in this.headers) {
                request.setRequestHeader(key, this.headers[key]);
            }

            request.open(this.#method, this.#url, true);
            request.onreadystatechange((request, event) =>{
                if(request.readyState === XMLHttpRequest.DONE) {
                    let status = request.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        return resolve(true);
                    } else {
                        // Oh no! There has been an error with the request!
                        return reject(false);
                    }
                }
            });
            request.send();
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
