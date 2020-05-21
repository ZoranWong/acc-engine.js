import app from '../src/index';
import EventInterface from "../src/events/EventInterface";
import Listener from "../src/events/Listener";
import fs from 'fs';


app.run();

class TestEvent extends EventInterface {
    constructor(event) {
        super(event);
        this.event = event;
    }
}

class TestEventListener extends Listener {
    handle(event) {
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