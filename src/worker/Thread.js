import PoolInterface from "./PoolInterface";
export default class Thread {
    #threadId = null;
    #task = null;
    #name = null;
    /**@property {PoolInterface} #pool*/
    #pool = null;
    constructor(name, task, pool) {
        this.#name = name;
        this.#task = task;
        this.#pool = pool;
        this.#threadId = (new Date()).getTime();
    }

    async run(...params) {

        let task = this.#task;
        let result = await this.pool.exec(task, params);
        this.pool.terminate();
        return result;
    }

    get pool() {
        return this.#pool;
    }
}
