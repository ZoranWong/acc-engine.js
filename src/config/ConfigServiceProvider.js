import ServiceProvider from '../constracts/ServiceProvider';
import Repository from './Repository';
export default class ConfigServiceProvider extends ServiceProvider {
    register() {
        let config = {};
        this.app.singleton('config', () => {
            return new Repository(config);
        });
    }
}
