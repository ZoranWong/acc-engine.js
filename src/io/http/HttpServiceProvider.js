import ServiceProvider from '../../constracts/ServiceProvider';
import XMLHttpAdapter from './XMLHttpAdapter';
import Client from './Client';
import config from "./config";
export default class HttpServiceProvider extends ServiceProvider {
    register() {
        this.app.bind('httpAdapter', (app) => {
            return new XMLHttpAdapter(app);
        });
        this.app.singleton('http', (app) => {
            return new Client(app);
        });

        this.app.config['http'] = config;
    }
}
