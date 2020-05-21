import ServiceProvider from '../constracts/ServiceProvider';
import Dispatcher from './Dispatcher';
export default class EventServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('dispatcher', (app) => {
            return new Dispatcher(app)
        });
        // Add event-listener method and event fire method to Application instance
        this.app.mixin({
            on(event, listener) {
                this.dispatcher.on(event, listener);
            },
            once(event, listener) {
                this.dispatcher.once(event, listener);
            },
            emitter(event) {
                this.dispatcher.emitter(event);
            }
        });
    }
}
