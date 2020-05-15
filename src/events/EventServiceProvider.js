import ServiceProvider from '../constracts/ServiceProvider';
export default class EventServiceProvider extends ServiceProvider {
    register() {
        this.app.mixin({
            on(event, listener) {

            },
            once(event, listener) {

            },
            emitter(event) {

            }
        });
    }
}
