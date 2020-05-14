import ServiceProvider from '../../constracts/ServiceProvider';
import XMLHttpAdapter from './XMLHttpAdapter';
import Client from './Client';
export default class HttpServiceProvider extends ServiceProvider {
    register() {
        // this.app.bind('httpAdapter', XMLHttpAdapter);
        this.app.singleton('http', Client);
    }
}
