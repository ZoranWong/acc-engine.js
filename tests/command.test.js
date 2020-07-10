import app from '../src/index';
import Command from "../src/command/Command";
// const p = require('../lib/main');
app.run();
// console.log(p);
class TestCommand extends Command {
    async handle(name) {
        return true;
    }
}
app.registerCommand('TEST_COMMAND', TestCommand);
test('event test !', async function () {
    expect(await app.command('TEST_COMMAND', 'test command'))
        .toEqual(true);
});
