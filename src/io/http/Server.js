import {createServer} from 'http';
import {cpus} from 'os';
export default class Server {
    #port = null;
    #http;
    #workerNum = 0;
    #cpus = [];
    constructor (port) {
        this.#port = port;
        this.#cpus = cpus();
        this.#workerNum = this.#cpus.length;
    }

    requestHandle (request) {
        return null;
    }

    responseSend (res, nodeRes) {

    }

    run () {

    }
}
