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

    thread(name, thread = null) {
        if(!this.#workers[name]){
            if(thread)
                thread = thread.indexOf('/') === 0 ? thread : `/${thread}`;
            let pool = !thread ? workerPool.pool() : workerPool.pool(`../../..${thread}`);
            console.log(pool);
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
