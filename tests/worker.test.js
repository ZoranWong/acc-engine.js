const workerpool = require('workerpool');
import app from '../src/index';
import {
    Thread
} from './Thread';
const pool = workerpool.pool();
app.rootPath = __dirname;
app.run();
app.config.app.version = '0.0.1'
it('worker register function is ok!', async function () {
    let result = await app.workerManager.thread('task1');
    console.log(await result.run(task1), __filename);
    expect(true)
        .toEqual(true);
});
function console01(context) {
    console.log(context);
}

function task1() {
    return true;
}

app.workerManager.thread('task2', 'tests/Thread.js');
