import ServiceProvider from '../../constracts/ServiceProvider';
import XMLHttpAdapter from './XMLHttpAdapter';
import Client from './Client';
import config from "./config";
import Application from "../../foundation/Application";
import UriService from "./UriService";
export default class HttpServiceProvider extends ServiceProvider {
    register() {
        this.app.bind('httpAdapter', (app) => {
            return new XMLHttpAdapter(app);
        });
        this.app.singleton('http', (app) => {
            return new Client(app);
        });

        this.app.singleton('uri', () => {
            return new UriService();
        });
        let repository = Application.getInstance().config;
        repository['http'] = config;
        // console.log(this.app.http, '--------------- http --------------');
    }
}
