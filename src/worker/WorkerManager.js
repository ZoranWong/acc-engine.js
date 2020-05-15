import workerpool from 'workerpool'
export default class WorkerManager {
    #app = null;
    #pool = null;
    constructor(app) {
        this.#app = app;
        this.#pool = workerpool.pool;
    }

    thread(thread) {
        //this.#workers.set(script, new Worker(script));
    }
}
