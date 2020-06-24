import workerPool from 'workerpool';
import Thread from './Thread';
import {isString} from 'underscore';
import PoolInterface from "./PoolInterface";

export default class WorkerManager {
    #app = null;
    #workers = {};

    constructor(app) {
        this.#app = app;
    }

    thread(name = null, thread = null) {
        if (!this.#workers[name]) {
            let pool = null;
            if (thread) {
                pool = workerPool.pool(`${thread}`);
            } else if (name) {
                pool = workerPool.pool();
            } else {
                return new Thread(Date.now(), workerPool.pool());
            }
            this.#workers[name] = new Thread(name, pool);
        }
        return this.#workers[name];
    }

    /**
     * @return {Application}
     * */
    get app() {
        return this.#app;
    }
}
