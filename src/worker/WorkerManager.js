import workerPool from 'workerpool';
import Thread from './Thread';
import PoolInterface from "./PoolInterface";
export default class WorkerManager {
    #app = null;
    #workers = {};
    constructor(app) {
        this.#app = app;
    }

    thread(name, thread) {
        let pool = workerPool.pool(thread);
        this.#workers[name] = new Thread(name, pool);
        return this;
    }


    run(name) {
        let worker = this.#workers[name];
        return worker ? worker.run.bind(worker) : () => {};
    }
}
