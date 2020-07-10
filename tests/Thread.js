const workerPool = require('workerpool');
const data = require('./threadData.worker');
// import data from './threadData.worker';
class Thread {
    // static path = PATH;
    constructor() {

    }
    run() {
        console.log('------------- run ---------', data);
        return true;
    }
}

workerPool.worker({
    worker: () => (new Thread()).run()
})

console.log();