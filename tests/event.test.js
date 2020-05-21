import app from '../src/index';
import EventInterface from "../src/events/EventInterface";
import Listener from "../src/events/Listener";


app.run();

class TestEvent extends EventInterface {
    constructor(event) {
        super(event);
    }
}

class TestEventListener extends Listener {
    handle(event) {
        console.log(event);
    }
}

app.on(TestEvent, TestEventListener);

app.emitter(new TestEvent('test'));

test('Application version 0.0.1!', async function () {
    expect(new TestEvent() instanceof EventInterface)
        .toEqual(true);
});