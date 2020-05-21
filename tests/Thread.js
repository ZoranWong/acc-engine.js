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
exports.Thread = Thread;
