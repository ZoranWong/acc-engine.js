import Application from "../src";
const workerpool = require('workerpool');

const app = Application.getInstance();
app.rootPath = __dirname;
app.run();
app.config.app.version = '0.0.1'
it('worker register function is ok!', async function () {
    let thread = app.workerManager.thread();
    console.log(await thread.run(task1), __filename);
    expect(true)
        .toEqual(true);
    let th = app.workerManager.thread('task2', './tests/Thread.js');
    let worker =  await th.run();
    console.log(worker);
});

function task1() {
    return true;
}

