import ServiceProvider from '../constracts/ServiceProvider';
import Database from './Database';
export default class ModelServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('db', () => {
            new Database();
        });
    }
}
