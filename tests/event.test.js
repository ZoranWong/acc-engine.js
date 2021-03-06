import Application, {EventInterface, ListenerInterface as Listener} from '../lib';
import fs from 'fs';

const app = Application.getInstance();
app.run();
class TestEvent extends EventInterface {
    constructor(event) {
        super(event);
        this.event = event;
    }
}

class TestEventListener extends Listener {
    async handle(event) {
        console.log(event)
    }
}

app.on(TestEvent, TestEventListener);

app.emitter(new TestEvent('test'));

test('event test !', async function () {
    expect(new TestEvent() instanceof EventInterface)
        .toEqual(true);
});

fs.writeSync(1, '----------------- event ----------');