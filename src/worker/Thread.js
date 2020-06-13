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
        if(typeof method === 'function'){
            method.apply(worker, params);
        }else if(isString(method)) {
            worker[method](...params);
        }
        this.pool.terminate();
        return result;
    }

    get pool() {
        return this.#pool;
    }
}
