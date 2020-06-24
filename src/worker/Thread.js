import PoolInterface from "./PoolInterface";
import {isString} from "underscore";

export default class Thread {
    #threadId = null;
    #name = null;
    /**@property {PoolInterface} #pool*/
    #pool = null;
    constructor(name, pool) {
        this.#name = name;
        this.#pool = pool;
        this.#threadId = (new Date()).getTime();
    }

    async run(method, ...params) {
        let worker = await this.pool.proxy();
        let result = null;
        if(typeof method === 'function'){
            result =  await worker.run(String(method), params);
        }else {
            result = await (worker.worker());
        }
        this.pool.terminate();
        return result;
    }

    get pool() {
        return this.#pool;
    }
}
