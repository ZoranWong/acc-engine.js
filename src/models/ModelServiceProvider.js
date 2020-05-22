import ServiceProvider from '../constracts/ServiceProvider';
import Application from "../foundation/Application";
import StoreManager from "./StoreManager";
export default class ModelServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('models', function () {
            return new Proxy(new Map(), {
                set(target, p, value, receiver) {
                    target.set(p, value);
                    return value;
                },
                get(target, p, receiver) {
                    return target.get(p);
                }
            });
        });
        this.app.singleton('store', function (app) {
            return new StoreManager(app);
        });
    }
}
