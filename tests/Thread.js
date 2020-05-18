const data = require('./threadData');

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
