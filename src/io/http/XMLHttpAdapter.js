import Adapter from './Adapter';

export default class XMLHttpAdapter extends Adapter {
    constructor(app) {
        super(app);
    }

    #xmlHttpRequest() {
        console.log('---------------', this.method, this.url);
        return new Promise((resolve, reject) => {
            console.log('========== 1111 ======')
            let request = new XMLHttpRequest();
            for (let key in this.headers) {
                request.setRequestHeader(key, this.headers[key]);
            }
            console.log('========== 2222 ======')
            request.open(this.method, this.url, true);
            console.log('========== 333 ======')
            try{
                request.onreadystatechange = function (event) {
                    if (request.readyState === XMLHttpRequest.DONE) {
                        console.log("================ response ===========", request.status)
                        let status = request.status;
                        if (status === 0 || (status >= 200 && status < 400)) {
                            return resolve(true);
                        } else {
                            // Oh no! There has been an error with the request!
                            return resolve(false);
                        }
                    }else{
                        resolve(false);
                    }
                };
                request.onerror = (errnoError) => {
                    console.log(errnoError)
                }
                request.send();
            }catch (e) {
                // console.log(e);
            }
        })
    }

    async get(url, queries = {}) {
        console.log('=============== GET ===========', 1);
        await super.get(url, queries);
        console.log('=============== GET ===========', 2);
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
