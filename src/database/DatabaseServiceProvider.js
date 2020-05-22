
import ServiceProvider from '../constracts/ServiceProvider';
import Application from "../foundation/Application";
import DBDriver from "./DBDriver";
import Database from "./Database";
export default class ModelServiceProvider extends ServiceProvider {
    register() {

        this.app.bindMethod('getDBDriver', function (app) {
            return new DBDriver(app);
        });
        this.app.singleton('db',/**@param {Application} app*/ (app) => {
            new Database(app);
        });
    }
}
