import ServiceProvider from '../constracts/ServiceProvider';
import Repository from './Repository';
import app from './configs/app';
export default class ConfigServiceProvider extends ServiceProvider {
    register() {
        let config = {
            app: app
        };
        this.app.singleton('config', () => {
            return new Proxy(new Repository(config), {
                set(obj, prop, value) {
                    return obj.prop(prop, value);
                },
                get(obj, prop) {
                    return obj.getProp(prop);
                }
            });
        });

        let providers = app['bootstrapProviders'];
        for (let provider of providers) {
            this.app.registerProvider(provider);
        }
    }
}
