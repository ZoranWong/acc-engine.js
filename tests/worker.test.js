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
    let result = await pool.exec(newThread, [app.rootPath + '/Thread.js']);
    expect(result)
        .toEqual(true);
    pool.terminate();
});
console.log('==================== worker =============');

function newThread(script) {
    const {
        Thread
    } = require(script);
    return (new Thread)
        .run();
}
