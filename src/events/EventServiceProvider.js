import ServiceProvider from '../constracts/ServiceProvider';
import Dispatcher from './Dispatcher';
export default class EventServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('dispatcher', Dispatcher);
        // Add event-listener method and event fire method to Application instance
        this.app.mixin({
            on(event, listener) {
                /**
                 * @var {Dispatcher} dispatcher
                 * */
                let dispatcher = this['dispatcher'];
                dispatcher.on(event, listener);
            },
            once(event, listener) {
                /**
                 * @var {Dispatcher} dispatcher
                 * */
                let dispatcher = this['dispatcher'];
                dispatcher.once(event, listener);
            },
            emitter(event) {
                /**
                 * @var {Dispatcher} dispatcher
                 * */
                let dispatcher = this['dispatcher'];
                dispatcher.emitter(event);
            }
        });
    }
}
