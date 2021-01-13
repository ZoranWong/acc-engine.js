import ServiceProvider from "../../constracts/ServiceProvider";
import config from "./config";
import WebsocketAdapter from "./WebsocketAdapter";

export default class SocketServiceProvider extends ServiceProvider{
    register() {
        this.app.singleton('socket',  (app) => {
            return new WebsocketAdapter(app);
        });

        this.app.config['socket'] = config;
    }
}
