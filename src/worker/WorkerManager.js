import workerpool from 'workerpool';
import Thread from './Thread';
export default class WorkerManager {
    #app = null;
    #pool = null;
    #workers = {};
    constructor(app) {
        this.#app = app;
        this.#pool = workerpool.pool();
    }

    thread(name, thread) {
        this.#workers[name] = new Thread(name, thread, this.#pool);
        return this;
    }

    run(name) {
        let worker = this.#workers[name];
        return worker ? worker.run.bind(worker) : () => {};
    }
}
