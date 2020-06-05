import PoolInterface from "./PoolInterface";
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

    async run(...params) {
        let result = await this.pool.exec('main', params);
        this.pool.terminate();
        return result;
    }

    get pool() {
        return this.#pool;
    }
}
