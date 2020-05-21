import ServiceProvider from '../constracts/ServiceProvider';
import WorkerManager from './WorkerManager';
export default class WorkerServiceProvider extends ServiceProvider {
    register() {
        this.app.singleton('workerManager', (app) => {
            return new WorkerManager(app)
        });
    }
}
