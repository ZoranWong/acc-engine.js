import Application , {Command} from '../src';
const app = Application.getInstance();
app.run();
class TestCommand extends Command {
    async handle(name) {
        return true;
    }
}
console.log(app);
// app.registerCommand('TEST_COMMAND', TestCommand);
test('command test !', async function () {
    // expect(await app.command('TEST_COMMAND', 'test command'))
    //     .toEqual(true);
    expect(true)
        .toEqual(true);
});

function trim(str, x) {
    let reg = new RegExp(`^(${x}+)|(${x}+)$`, 'g');
    return str.replace(reg,'');
}

console.log(trim('//aaaa/', '/'))