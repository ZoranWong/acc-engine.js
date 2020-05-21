import workerPool from 'workerpool';
import Thread from './Thread';
import PoolInterface from "./PoolInterface";
export default class WorkerManager {
    #app = null;
    #pool = null;
    #workers = {};
    constructor(app) {
        this.#app = app;
        this.#pool = workerPool.pool();
    }

    thread(name, thread) {
        this.#workers[name] = new Thread(name, thread, this.pool);
        return this;
    }

    /**
     * @return {PoolInterface}
     * */
    get pool() {
        return this.#pool;
    }

    run(name) {
        let worker = this.#workers[name];
        return worker ? worker.run.bind(worker) : () => {};
    }
}
